
Checkbox = React.createClass({
  mixins: [Mixins.classGenerator],
  
  getDefaultProps () {
    return {

    };
  },
  
  getInitialState: function() {
    return { checked: this.props.checked };
  },

  componentDidMount: function () {
    if (typeof this.props.init != 'undefined') {
      if (this.props.init === false) {
        
      }

      if (this.props.init === true) {
        $(ReactDOM.findDOMNode(this)).checkbox();
      } else {
        $(ReactDOM.findDOMNode(this)).checkbox(this.props.init);
      }
    } else {
      if (this.props.onChange) {
        $(ReactDOM.findDOMNode(this)).checkbox({
          onChange: this.props.onChange
        });
      }
    }
  },
  
  render() {
    let props = this.props;
    
    return <div className={this.getClasses("ui", "checkbox")}>
      <input
        type="checkbox"
        className="hidden"
        name={props.name} />
      <label>{this.props.label}</label>
    </div>;
  }
});
