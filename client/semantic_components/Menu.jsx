
Menu = React.createClass({
  mixins: [Mixins.classGenerator],

  
  render() {
    let {className, ...other} = this.props;
    
    return <div {...other} className={this.getClasses("ui", "menu")}>
      {this.props.children}
    </div>;
  }
});
/*
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
      return <a href={this.props.href} className={this.getClasses("")}>
        {this.props.children}
      </a>;
    }
    
    return <div className={this.getClasses("")}>
      {this.props.children}
    </div>;
  }
});
*/