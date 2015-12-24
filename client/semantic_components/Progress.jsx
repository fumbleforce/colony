Progress = React.createClass({
  mixins: [Mixins.classGenerator, Mixins.stateSelector],
  
  propTypes: {
    tab: React.PropTypes.string,
  },
  
  componentDidMount: function () {
    if (typeof this.props.init != 'undefined') {
      if (this.props.init === false) {
        return;
      }

      if (this.props.init === true) {
        $(this.refs.progress).progress();
      } else {
        $(this.refs.progress).progress(this.props.init);
      }
    }
  },
  
  render() {
    let style = {
      marginBottom: this.props.label ? "": "0px"
    };

    let {
      className,
      percent, value, total,
      active, success, warning, error, disabled,
      ...other
    } = this.props;

    let state = {
      active: this.getActive(),
      success: this.getSuccess(),
      warning: this.getWarning(),
      error: this.getError(),
      disabled: this.getDisabled()
    };

    return (
      <div {...other}
        style={style}
        className={this.getClasses("ui progress", state)}
        data-percent={percent}
        data-value={value}
        data-total={total}
        ref="progress">
        
        <div className="bar"></div>
        <div className="label">{this.props.label}</div>
      </div>
    );
  },

});
