HexElement = React.createClass({
  propTypes: {

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
  
  render () {
    let {
      hex,
      layout,
      radius,
      ...other
    } = this.props;
    
    let origin = Layout.hexToPixel(layout, hex);
    origin.x -= 5;
    
    return (
      <g>
        <defs>
        
        </defs>
        
        <polygon
          onClick={this.handleClick}
          style={{ stroke: "#fff", fill: hex.color }}
          points={this.getPoints()} />
        
        <text
          x={origin.x - (radius / 2)}
          y={origin.y - (radius / 4)}
          style={{fill: "#fff"}}>
          
          {hex.q}
        </text>
        <text
          x={origin.x + (radius / 2)}
          y={origin.y - (radius / 4)}
          style={{fill: "#fff"}}>
          
          {hex.r}
        </text>
        <text
          x={origin.x}
          y={origin.y + (radius / 2)}
          style={{fill: "#fff"}}>
          
          {hex.s}
        </text>
      </g>
    );
  }
});
