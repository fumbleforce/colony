Hexmap = React.createClass({
  propTypes: {

  },
  
  getDefaultProps () {
    return {
      scale: 1
    }
  },
  
  render () {
    let {
      width,
      height,
      orientation,
      hexes,
      radius,
      scale,
      ...other
    } = this.props;
    
    let orientationLayout;
    if (orientation === "flat") orientationLayout = Layout.Flat;
    if (orientation === "pointy") orientationLayout = Layout.Pointy;
    
    let hexDiameter = Math.min(width, height);
    let hexSize = Point(hexDiameter / (4 * radius), hexDiameter / (4 * radius));
    let origin = Point(width / 2, height / 2);
    
    hexSize.x *= scale;
    hexSize.y *= scale;
    
    let layout = Layout(orientationLayout, hexSize, origin);
    let style = {
      height: height + "px",
      width: width + "px",
      margin: "0 auto",
      display: "block"
    };
    
    return (
      <svg style={style}>
          {hexes.map((hex) => {
            return <HexElement
              key={`${hex.q},${hex.r},${hex.s}`}
              layout={layout}
              hex={hex}
              {...other}
              radius={hexSize.x} />;
          })}
      </svg>
    );
  }
});
