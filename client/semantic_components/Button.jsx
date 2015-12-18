Button = React.createClass({
  mixins: [Mixins.classGenerator],
  
  render() {
    return <div className={this.getClasses("ui", "button")}>
      {this.props.children}
    </div>;
  }
});

Buttons = React.createClass({
  
  mixins: [Mixins.classGenerator],
  
  render() {
    return <div className={this.getClasses("ui", "buttons")}>
      {this.props.children}
    </div>;
  }
});
