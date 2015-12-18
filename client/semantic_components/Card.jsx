Card = React.createClass({
  
  mixins: [Mixins.classGenerator],
  
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
    return <div className="extra content">
      {this.props.extra}
    </div>
  },
  
  render() {
    let props = this.props;
    
    return <div className={this.getClasses("ui card")}>
      {props.icon ? this.renderIcon() : ""}
      
      <div className="content">
        {props.header ? this.renderHeader() : ""}
        {props.meta ? this.renderMeta() : ""}
        {props.description ? this.renderDescription() : ""}
      </div>
      
      {props.extra ? this.renderExtra() : ""}
    </div>;
  }
});

Cards = React.createClass({
  
  mixins: [Mixins.classGenerator],
  
  render() {
    return <div className={this.getClasses("ui cards")}>
      {this.props.children}
    </div>;
  }
});
