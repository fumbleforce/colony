
Point = function (x, y) {
  return {x: x, y: y};
};

Hex = function (q, r, s) {
  return {q: q, r: r, s: s};
};

Hex.ToKey = function (hex) {
  return hex.q + "|" + hex.r + "|" + hex.s;
};

Hex.Add = function (a, b) {
  return Hex(a.q + b.q, a.r + b.r, a.s + b.s);
};

Hex.Subtract = function (a, b) {
  return Hex(a.q - b.q, a.r - b.r, a.s - b.s);
};

Hex.Scale = function (a, k) {
  return Hex(a.q * k, a.r * k, a.s * k);
};

var hexDirections = [
  Hex(1, 0, -1),
  Hex(1, -1, 0),
  Hex(0, -1, 1),
  Hex(-1, 0, 1),
  Hex(-1, 1, 0),
  Hex(0, 1, -1)];

Hex.Direction = function (direction) {
  return hexDirections[direction];
};

Hex.Neighbor = function (hex, direction) {
  return Hex.Add(hex, Hex.Direction(direction));
};

var hexDiagonals = [
  Hex(2, -1, -1),
  Hex(1, -2, 1),
  Hex(-1, -1, 2),
  Hex(-2, 1, 1),
  Hex(-1, 2, -1),
  Hex(1, 1, -2)];

Hex.DiagonalNeighbor = function (hex, direction) {
  return hexAdd(hex, hexDiagonals[direction]);
};

Hex.Length = function (hex) {
  return Math.trunc((Math.abs(hex.q) + Math.abs(hex.r) + Math.abs(hex.s)) / 2);
};

Hex.Distance = function (a, b) {
  return Hex.Length(Hex.Subtract(a, b));
};

Hex.Round = function (h) {
  var q = Math.trunc(Math.round(h.q));
  var r = Math.trunc(Math.round(h.r));
  var s = Math.trunc(Math.round(h.s));
  var qDiff = Math.abs(q - h.q);
  var rDiff = Math.abs(r - h.r);
  var sDiff = Math.abs(s - h.s);
  if (qDiff > rDiff && qDiff > sDiff) {
    q = -r - s;
  } else {
    if (rDiff > sDiff) {
      r = -q - s;
    } else {
      s = -q - r;
    }
  }
  return Hex(q, r, s);
};

Hex.Lerp = function (a, b, t) {
  return Hex(a.q + (b.q - a.q) * t, a.r + (b.r - a.r) * t, a.s + (b.s - a.s) * t);
};

Hex.Linedraw = function (a, b) {
  var N = Hex.Distance(a, b);
  var results = [];
  var step = 1.0 / Math.max(N, 1);
  for (var i = 0; i <= N; i++) {
    results.push(Hex.Round(Hex.Lerp(a, b, step * i)));
  }
  return results;
};


OffsetCoord = function (col, row) {
  return {col: col, row: row};
};

var EVEN = 1;
var ODD = -1;

OffsetCoord.qoffsetFromCube = function (offset, h) {
  var col = h.q;
  var row = h.r + Math.trunc((h.q + offset * (h.q & 1)) / 2);
  return OffsetCoord(col, row);
};

OffsetCoord.qoffsetToCube = function (offset, h) {
  var q = h.col;
  var r = h.row - Math.trunc((h.col + offset * (h.col & 1)) / 2);
  var s = -q - r;
  return Hex(q, r, s);
};

OffsetCoord.roffsetFromCube = function (offset, h) {
  var col = h.q + Math.trunc((h.r + offset * (h.r & 1)) / 2);
  var row = h.r;
  return OffsetCoord(col, row);
};

OffsetCoord.roffsetToCube = function (offset, h) {
  var q = h.col - Math.trunc((h.row + offset * (h.row & 1)) / 2);
  var r = h.row;
  var s = -q - r;
  return Hex(q, r, s);
};





Orientation = function (f0, f1, f2, f3, b0, b1, b2, b3, startAngle) {
  return {f0: f0, f1: f1, f2: f2, f3: f3, b0: b0, b1: b1, b2: b2, b3: b3, startAngle: startAngle};
};



/*
  Layout
  Defines the structure of a hex map.
  
  orientation: Orientation - either Layout.Pointy or Layout.Flat
  size: { x, y } - pixel size of  map
  origin: { x, y } - start of map
 */

Layout = function (orientation, size, origin) {
  return {orientation: orientation, size: size, origin: origin};
};

Layout.Pointy = Orientation(
  Math.sqrt(3.0),
  Math.sqrt(3.0) / 2.0,
  0.0,
  3.0 / 2.0,
  Math.sqrt(3.0) / 3.0,
  -1.0 / 3.0,
  0.0,
  2.0 / 3.0,
  0.5);

Layout.Flat = Orientation(3.0 / 2.0, 0.0,
  Math.sqrt(3.0) / 2.0,
  Math.sqrt(3.0),
  2.0 / 3.0,
  0.0,
  -1.0 / 3.0,
  Math.sqrt(3.0) / 3.0,
  0.0);

Layout.hexToPixel = function (layout, h) {
  var M = layout.orientation;
  var size = layout.size;
  var origin = layout.origin;
  var x = (M.f0 * h.q + M.f1 * h.r) * size.x;
  var y = (M.f2 * h.q + M.f3 * h.r) * size.y;
  return Point(x + origin.x, y + origin.y);
};

Layout.pixelToHex = function (layout, p) {
  var M = layout.orientation;
  var size = layout.size;
  var origin = layout.origin;
  var pt = Point((p.x - origin.x) / size.x, (p.y - origin.y) / size.y);
  var q = M.b0 * pt.x + M.b1 * pt.y;
  var r = M.b2 * pt.x + M.b3 * pt.y;
  return Hex(q, r, -q - r);
};

Layout.hexCornerOffset = function (layout, corner) {
  var M = layout.orientation;
  var size = layout.size;
  var angle = 2.0 * Math.PI * (corner + M.startAngle) / 6;
  return Point(size.x * Math.cos(angle), size.y * Math.sin(angle));
};

Layout.polygonCorners = function (layout, h) {
  var corners = [];
  var center = Layout.hexToPixel(layout, h);
  for (var i = 0; i < 6; i++) {
    var offset = Layout.hexCornerOffset(layout, i);
    corners.push(Point(center.x + offset.x, center.y + offset.y));
  }
  return corners;
};
