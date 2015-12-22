Progress = React.createClass({
  mixins: [Mixins.classGenerator],
  
  propTypes: {
    tab: React.PropTypes.string,
  },
  
  componentDidMount() {
      $('.progress').progress();
  },
  
  render() {
    let style = {
      marginBottom: "0px"
    };
    
    return <div style={style} className={this.getClasses("ui", "progress")}>
        <div className="bar"></div>
      <div className="label">{this.props.label}</div>
    </div>;
  }
});
