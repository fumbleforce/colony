Tab = React.createClass({
  mixins: [Mixins.classGenerator, Mixins.stateSelector],
  
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
  mixins: [Mixins.classGenerator, Mixins.stateSelector],
  
  propTypes: {
    tab: React.PropTypes.string,
  },
  
  render() {
    let {
      className,
      active,
      tab,
      ...other
    } = this.props;
    
    let state = {
      active: this.getActive(),
    }
    
    return  <div {...other}
        data-tab={tab}
        className={this.getClasses("ui tab", state)}>
        
        {this.props.children}
      </div>
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