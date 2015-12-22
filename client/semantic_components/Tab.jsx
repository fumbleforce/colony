Tab = React.createClass({
  propTypes: {
    tab: React.PropTypes.string,
  },
  
  render() {
    return <a className={(this.props.active?"active ":"")+"item"} data-tab={this.props.tab}>
      {this.props.children}
    </a>;
  }
});

TabContent = React.createClass({
  propTypes: {
    tab: React.PropTypes.string,
  },
  
  render() {
    return <div className={(this.props.active?"active ":"")+"ui tab basic segment"} data-tab={this.props.tab}>
      {this.props.children}
    </div>;
  }
});


TabMenu = React.createClass({
  propTypes: {
    tab: React.PropTypes.string,
  },
  
  mixins: [Mixins.classGenerator],
  
  componentDidMount() {
      $('.menu .item').tab();
  },
  
  render() {
    return <div className={this.getClasses("ui", "menu")}>
      {this.props.children}
    </div>;
  }
});