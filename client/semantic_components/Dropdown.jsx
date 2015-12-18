
let defaultClassName = "ui dropdown";

Dropdown = React.createClass({

  mixins: [Mixins.classGenerator, Mixins.stateSelector],

  render: function () {

    let {className, color, type, error, disable, active, ...other} = this.props;

    if (this.getActive() || this.getDisabled()) {
      defaultClassName += ' simple';
    }

    return (
      <Unit {...other}
        className={this.getClasses(defaultClassName)}
        color="null"
        type="div"
        error={this.getError()}
        disable={this.getDisabled()}
        active={this.getActive()}>
        
        <input type="hidden" name={this.props.name} />
        <i className="dropdown icon"></i>
        <div className="default text">{this.props.default}</div>
        <div className="menu">
            {this.props.children}
        </div>
      </Unit>
    );
  },

  componentDidMount: function () {
    if (typeof this.props.init != 'undefined') {
      if (this.props.init === false) {
        return;
      }

      if (this.props.init === true) {
        $(ReactDOM.findDOMNode(this)).dropdown();
      } else {
        $(ReactDOM.findDOMNode(this)).dropdown(this.props.init);
      }
    }
  }
});