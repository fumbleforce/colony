Item = React.createClass({
  classes () {
    let props = this.props;
    let classes = "ui ";
    
    classes += props.width ? ` ${props.width} wide `: "";
    classes += props.className ? ` ${props.className} `: "";
    classes += " item";
    return classes;
  },
  
  renderIcon() {
    return <div className="image">
      <Icon icon={this.props.icon} size="large" />
    </div>
  },
  
  renderMeta () {
    return <div className="meta">{this.props.meta}</div>
  },
  
  renderHeader () {
    return <a className="header">{this.props.header}</a>
  },
  
  renderDescription () {
    return <div className="description">
      {this.props.description}
    </div>
  },
  
  renderExtra () {
    return <div className="extra">
      {this.props.extra}
    </div>
  },
  
  render() {
    let props = this.props;
    
    return <div className={this.classes()}>
      {props.icon ? this.renderIcon() : ""}
      
      <div className="content">
        {props.header ? this.renderHeader() : ""}
        {props.meta ? this.renderMeta() : ""}
        {props.description ? this.renderDescription() : ""}
        {props.extra ? this.renderExtra() : ""}
      </div>
    </div>;
  }
});


Items = React.createClass({
  classes () {
    let props = this.props;
    let classes = "ui ";
    classes += props.className ? ` ${props.className} `: "";
    classes += " items";
    return classes;
  },
  
  render() {
    return <div className={this.classes()}>
      {this.props.children}
    </div>;
  }
});