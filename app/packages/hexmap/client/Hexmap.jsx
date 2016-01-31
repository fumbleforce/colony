Hexmap = React.createClass({
  mixins: [DimensionsMixin],
  
  propTypes: {

  },
  
  getDefaultProps () {
    return {
      scale: 1,
      selection: true,
      draggable: false,
    }
  },
  
  getInitialState () {
    return {
      selected: false,
      localScale: 1,
      dragOffsetX: 0,
      dragOffsetY: 0,
      dragging: false,
    }
  },
  
  handleWheel (e) {
    e.preventDefault();
    
    this.setState({
      localScale: U.clamp(this.state.localScale - e.deltaY / 500, 0.1, 5)
    });
  },
  
  handleClick (hex, e) {
    const hexKey = Hex.ToKey(hex);
    this.setState({
      selected: hexKey,
      selectedHex: hex
    });
    
    if (this.props.onClick) {
      this.props.onClick(hex, e);
    }
  },
  
  dragStart (e) {
    if (!this.props.draggable) return;
    
    this.setState({
      dragging: true,
      dragOrigin: {
        x: e.clientX,
        y: e.clientY
      }
    });
  },
  
  dragEnd () {
    this.setState({ dragging: false });
  },
  
  handleDrag (e) {
    if (!this.props.draggable) return;
    
    if (this.state.dragging) {
      this.setState({
        dragOffsetX: this.state.dragOffsetX - this.state.dragOrigin.x + e.clientX,
        dragOffsetY: this.state.dragOffsetY - this.state.dragOrigin.y + e.clientY,
        dragOrigin: {
          x: e.clientX,
          y: e.clientY
        }
      });
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
      localScale
    } = this.state;
    
    if (!containerHeight || !containerWidth) {
      return false;
    }
    
    let screenDiameter = Math.min(containerWidth, containerHeight);
    let hexSize = Point(screenDiameter / (4 * (radius + 0.5)), screenDiameter / (4 * (radius + 0.5)));
    
    return hexSize;
  },
  
  getLayout (hexSize) {
    let {
      config,
      ...other
    } = this.props;
    
    let {
      containerHeight,
      containerWidth,
    } = this.state;
    
    if (!containerHeight || !containerWidth) return false;
    
    let {
      orientation,
    } = config;
    
    let orientationLayout;
    if (orientation === "flat") orientationLayout = Layout.Flat;
    if (orientation === "pointy") orientationLayout = Layout.Pointy;
    
    let origin = Point(containerWidth / 2, containerHeight / 2);
    
    if (!hexSize) {
      hexSize = this.getHexSize();
    }
    
    return Layout(orientationLayout, hexSize, origin);
  },
  
  getScaleMatrix () {
    let {
      containerHeight,
      containerWidth,
      localScale,
    } = this.state;
    
    if (!containerHeight || !containerWidth) return false;
    
    let {
      scale,
    } = this.props;
    
    let ts = U.clamp(scale * localScale, 0.1, 5).toFixed(2);
    let fl = Math.floor;
    let cx = fl(containerWidth / 2);
    let cy = fl(containerHeight / 2);
    
    return `matrix(${ts},${0}, ${0}, ${ts}, ${fl(cx-ts*cx)}, ${fl(cy-ts*cy)})`;
  },
  
  componentWillUpdate (prevProps, prevState) {
    let heightChanged = prevState.containerHeight !== this.state.containerHeight;
    let widthChanged = prevState.containerWidth !== this.state.containerWidth;
    let scaleChanged = prevState.localScale !== this.state.localScale;
    
    /*
    if (heightChanged || widthChanged) {
      let hexSize = this.getHexSize();
      let layout = this.getLayout(hexSize);
      let scaleMatrix = this.getScaleMatrix();
      
      this.setState({
        layout,
        hexSize,
        scaleMatrix,
        calculationsComplete: layout && hexSize && scaleMatrix,
      });
    } else if (scaleChanged) {
      let scaleMatrix = this.getScaleMatrix();
      this.setState({
        scaleMatrix,
      });
    }
    */
  },
  
  render () {
    let {
      width,
      height,
      hexes,
      radius,
      config,
      onClick,
      ...other,
    } = this.props;
    
    let hexSize = this.getHexSize();
    let layout = this.getLayout(hexSize);
    let scaleMatrix = this.getScaleMatrix();
    let calculationsComplete = layout && hexSize && scaleMatrix;
    
    let {
      containerHeight,
      containerWidth,
      dragOffsetX,
      dragOffsetY,
      selected,
      /*
      layout,
      hexSize,
      scaleMatrix,
      calculationsComplete
      */
    } = this.state;
    
    const containerStyle = {
      width: width ? width + "px" : "100%",
      height: height ? height + "px" : "100%",
      padding: 0,
      border: 0
    };
    
    if (!calculationsComplete) {
      return <div style={containerStyle} ref="container"></div>
    }
    
    let style = {
      height: containerHeight + "px",
      width: containerWidth + "px",
      margin: "0 auto",
      display: "block",
    };
    
    let selectedHex;
    if (selected) {
      selectedHex = _.find(hexes, h => h.key === selected);
    }
    
    return (
      <div style={containerStyle} ref="container">
        <svg
          draggable="true"
          className="hexmap"
          style={style}
          onMouseDown={this.dragStart}
          onMouseUp={this.dragEnd}
          onMouseLeave={this.dragEnd}
          onMouseMove={this.handleDrag}
          onWheel={this.handleWheel}>
          
          {this.props.children
          }
          
          <g
            id="hexes"
            transform={
              "translate(" + dragOffsetX + " " + dragOffsetY + ")," +
              scaleMatrix
            }>
          
            {hexes.map((hex) => {
              const key = hex.key;
              if (key === this.state.selected) return <g key={key}></g>;
              return <HexElement
                key={key}
                hex={hex}
                layout={layout}
                showCoords={config.showCoords}
                selected={false}
                onClick={this.handleClick}
                {...other}
                radius={hexSize.x} />;
            })}
            
            {selectedHex ? 
              <HexElement
                hex={selectedHex}
                layout={layout}
                showCoords={config.showCoords}
                selected={true}
                onClick={this.handleClick}
                {...other}
                radius={hexSize.x} /> : <g></g>
            }
          </g>
        </svg>
      </div>
    );
  }
});
