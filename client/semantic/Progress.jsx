Progress = React.createClass({
  propTypes: {
    tab: React.PropTypes.string,
  },
  
  componentDidMount() {
      $('.progress').progress();
  },
  
  classes () {
    let props = this.props;
    let classes = "ui ";
    
    classes += props.width ? ` ${props.width} wide `: "";
    classes += props.className ? ` ${props.className} `: "";
    classes += " progress";
    return classes;
  },
  
  render() {
    return <div className={this.classes()}>
        <div className="bar"></div>
      <div className="label">{this.props.label}</div>
    </div>;
  }
});