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
    return <div className={(this.props.active?"active ":"")+"ui tab bottom attached segment"} data-tab={this.props.tab}>
      {this.props.children}
    </div>;
  }
});


TabMenu = React.createClass({
  propTypes: {
    tab: React.PropTypes.string,
  },
  
  componentDidMount() {
      $('.tabular.menu .item').tab();
  },
  
  render() {
    return <div className="ui tabular top attached menu">
      {this.props.children}
    </div>;
  }
});