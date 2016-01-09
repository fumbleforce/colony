HexElement = React.createClass({
  propTypes: {

  },
  
  getDefaultProps () {
    return {
      borderColor: "#999999",
      coordsColor: "#FFFFFF",
    };
  },
  
  getPoints () {
    const {
      hex,
      layout,
    } = this.props;
    
    const points = Layout.polygonCorners(layout, hex);
    let stringPoints = "";
    
    _.each(points, (point, i) => {
      if (i !== 0) {
        stringPoints += " ";
      }
      stringPoints += point.x + "," + point.y;
    });
    
    return stringPoints;
  },
  
  handleClick (e) {
    
    if (this.props.onClick) {
      this.props.onClick(this.props.hex, e);
    }
  },
  
  renderCoords () {
    let {
      hex,
      radius,
      coordsColor,
      layout,
    } = this.props;
    
    let origin = Layout.hexToPixel(layout, hex);
    origin.x -= 5;
    
    return <g className="coords">
      <text
        x={origin.x - (radius / 2)}
        y={origin.y - (radius / 4)}
        style={{fill: coordsColor}}>
        
        {"q" + hex.q}
      </text>
      <text
        x={origin.x + (radius / 2)}
        y={origin.y - (radius / 4)}
        style={{fill: coordsColor}}>
        
        {"r" + hex.r}
      </text>
      <text
        x={origin.x}
        y={origin.y + (radius / 2)}
        style={{fill: coordsColor}}>
        
        {"s" + hex.s}
      </text>
    </g>;
  },
  
  render () {
    let {
      hex,
      layout,
      radius,
      config,
      borderColor,
      selected,
      ...other
    } = this.props;
    
    let origin = Layout.hexToPixel(layout, hex);
    let iconSize = radius * 2;
    let iconX = origin.x - iconSize / 4;
    let iconY = origin.y - iconSize / 4;
    let icon = "/icons/" + hex.icon;
    
    return (
      <g>
        <defs>
          <pattern id="diagonalHatch" patternUnits="userSpaceOnUse" width="4" height="4">
            <path d="M-1,1 l2,-2
                     M0,4 l4,-4
                     M3,5 l2,-2" />
          </pattern>
        </defs>
        
        <polygon
          style={{
            stroke: selected ? "#FF0000" : borderColor,
            strokeWidth: selected ? "5px" : "1px",
            strokeLinejoin: "round",
            fill: hex.color,
          }}
          points={this.getPoints()} />
        
        {config.showCoords ? this.renderCoords() : <g></g>}
        
        {icon ? 
          <use xlinkHref={icon} x={iconX} y={iconY} width={radius} height={radius} />: <g />
        }
        
        {hex.isBorder ? 
          <polygon
            style={{
              fill: "url(#diagonalHatch)",
              opacity: 0.5
            }}
            points={this.getPoints()} /> : <g></g>
        }
        
        <polygon
          onClick={this.handleClick}
          style={{
            stroke: "transparent",
            fill: "transparent"
          }}
          points={this.getPoints()} />
        
      </g>
    );
  }
});
