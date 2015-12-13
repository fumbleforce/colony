Tab = React.createClass({
  propTypes: {
    tab: React.PropTypes.string,
  },
  
  componentDidMount() {
      
  },
  
  render() {
    return <a className="item" data-tab={this.props.tab}>
      {this.props.children}
    </a>;
  }
});


TabContent = React.createClass({
  propTypes: {
    tab: React.PropTypes.string,
  },
  
  componentDidMount() {
      
  },
  
  render() {
    return <div className="ui tab bottom attached segment" data-tab={this.props.tab}>
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