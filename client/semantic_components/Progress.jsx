Progress = React.createClass({
  mixins: [Mixins.classGenerator],
  
  propTypes: {
    tab: React.PropTypes.string,
  },
  
  componentDidMount() {
      $('.progress').progress();
  },
  
  render() {
    return <div className={this.getClasses("ui", "progress")}>
        <div className="bar"></div>
      <div className="label">{this.props.label}</div>
    </div>;
  }
});
