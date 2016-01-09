Form = React.createClass({
  mixins: [Mixins.classGenerator],
  
  render() {
    let {
      children,
      className,
      ...others
    } = this.props;
    
    return <form {...others} className={this.getClasses("ui", "form")}>
      {children}
    </form>;
  }
});

Field = React.createClass({
  mixins: [Mixins.classGenerator],
  
  render() {
    let props = this.props;
    
    return <div className={this.getClasses("field")}>
      {this.props.children}
    </div>;
  }
});


Fields = React.createClass({
  mixins: [Mixins.classGenerator],
  
  render() {
    let props = this.props;
    
    return <div className={this.getClasses("fields")}>
      {this.props.children}
    </div>;
  }
});
