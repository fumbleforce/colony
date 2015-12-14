Item = React.createClass({
  classes () {
    let props = this.props;
    let classes = "ui item ";
    
    classes += props.width ? ` ${props.width} wide `: "";
    return classes;
  },
  
  render() {
    let props = this.props;
    
    return <div className={this.classes()}>
      {props.image ? this.renderImage() : ""}
    
      {this.props.children}
    </div>;
  }
});

ItemContent = React.createClass({
  classes () {
    let props = this.props;
    let classes = "content";
    return classes;
  },
  
  renderMeta () {
    return <div class="meta">{this.props.meta}</div>
  },
  
  renderHeader () {
    return <a class="header">{this.props.header}</a>
  },
  
  render() {
    let props = this.props;
    
    return <div className={this.classes()}>
      {props.header ? this.renderHeader() : ""}
      {props.meta ? this.renderMeta() : ""}
      
      <div class="description">
        {this.props.children}
      </div>
    </div>;
  }
});

ItemExtra = React.createClass({
  classes () {
    let props = this.props;
    let classes = "extra";
    return classes;
  },
  
  render() {
    return <div className={this.classes()}>
      {this.props.children}
    </div>;
  }
});


Items = React.createClass({
  classes () {
    let props = this.props;
    let classes = "ui items ";
    return classes;
  },
  
  render() {
    return <div className={this.classes()}>
      {this.props.children}
    </div>;
  }
});