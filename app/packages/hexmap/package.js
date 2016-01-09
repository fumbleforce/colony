Package.describe({
  name: "colony:hexmap",
  version: "0.0.1",
  summary: "",
});

Package.onUse(function (api) {
  api.versionsFrom("1.1.0.2");
  api.use("ecmascript");
  api.use("react");
  api.use("stevezhu:lodash");
  
  api.addFiles("client/lib/DimensionsMixin.jsx", "client");
  
  api.addFiles("client/hexmath.js", "client");
  api.addFiles("client/HexElement.jsx", "client");
  api.addFiles("client/Hexmap.jsx", "client");
  
  api.export([
    "Hex",
    "Hexmap"
  ]);
});
