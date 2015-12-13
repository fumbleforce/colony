Menu = React.createClass({
  
  classes () {
    let props = this.props;
    let classes = "ui ";
    
    classes += props.className ? ` ${props.className} `: "";
    classes += " menu";
    return classes;
  },
  
  render() {
    return <div className={this.classes()}>
      {this.props.children}
    </div>;
  }
});

MenuItem = React.createClass({
  
  classes () {
    let props = this.props;
    let classes = "item ";
    
    classes += props.active ? " active " : "";
    classes += props.className ? ` ${props.className} `: "";
    return classes;
  },
  
  render() {
    if (this.props.href) {
      return <a href={this.props.href} className={this.classes()}>
        {this.props.children}
      </a>;
    }
    
    return <div className={this.classes()}>
      {this.props.children}
    </div>;
  }
});
