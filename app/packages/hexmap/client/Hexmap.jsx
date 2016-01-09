Hexmap = React.createClass({
  mixins: [DimensionsMixin],
  
  propTypes: {

  },
  
  getDefaultProps () {
    return {
      scale: 1,
      selection: true,
    }
  },
  
  getInitialState () {
    return {
      selected: false
    }
  },
  
  handleClick (hex, e) {
    const hexKey = Hex.ToKey(hex);
    this.setState({ selected: hexKey });
    console.log("Selected ", hexKey);
    
    if (this.props.onClick) {
      this.props.onClick(hex, e);
    }
  },
  
  getHexSize () {
    let {
      radius,
      scale,
    } = this.props;
    
    let {
      containerHeight,
      containerWidth,
    } = this.state;
    
    let hexDiameter = Math.min(containerWidth, containerHeight);
    let hexSize = Point(hexDiameter / (4 * radius), hexDiameter / (4 * radius));
    hexSize.x *= scale; 
    hexSize.y *= scale;
    
    return hexSize;
  },
  
  getLayout () {
    let {
      config,
      ...other
    } = this.props;
    
    let {
      containerHeight,
      containerWidth,
    } = this.state;
    
    let {
      orientation,
    } = config;
    
    let orientationLayout;
    if (orientation === "flat") orientationLayout = Layout.Flat;
    if (orientation === "pointy") orientationLayout = Layout.Pointy;
    
    let origin = Point(containerWidth / 2, containerHeight / 2);
    let hexSize = this.getHexSize();
    
    return Layout(orientationLayout, hexSize, origin);
  },
  
  render () {
    let {
      width,
      height,
      hexes,
      radius,
      config,
      onClick,
      ...other
    } = this.props;
    
    let {
      containerHeight,
      containerWidth,
    } = this.state;
    
    const containerStyle = {
      width: width ? width + "px" : "100%",
      height: height ? height + "px" : "100%",
      padding: 0,
      border: 0
    };
    
    if (!containerHeight || !containerWidth) {
      return <div style={containerStyle} ref="container"></div>
    }
    
    console.log(this.state);
    
    let layout = this.getLayout();
    let hexSize = this.getHexSize();
    
    let style = {
      height: containerHeight + "px",
      width: containerWidth + "px",
      margin: "0 auto",
      display: "block",
    };
    
    console.log(style);
    
    let selectedHex;
    if (this.state.selected) {
      selectedHex = _.find(hexes, (h) => h.key === this.state.selected);
    }
    
    return (
      <div style={containerStyle} ref="container">
        <svg style={style} >
            {hexes.map((hex) => {
              const key = hex.key;
              if (key === this.state.selected) return <g key={key}></g>;
              return <HexElement
                key={key}
                hex={hex}
                layout={layout}
                config={config}
                selected={false}
                onClick={this.handleClick}
                {...other}
                radius={hexSize.x} />;
            })}
            
            {selectedHex ? 
              <HexElement
                hex={selectedHex}
                layout={layout}
                config={config}
                selected={true}
                onClick={this.handleClick}
                {...other}
                radius={hexSize.x} /> : <g></g>
            }
        </svg>
      </div>
    );
  }
});
