Input = React.createClass({
  
  propTypes: {

  },
  
  getInitialState() {
    return {

    }
  },
  
  handleChange (e) {
      let value = e.target.value;
      let name = this.props.name;
      
      if (this.props.onChange) {
        this.props.onChange(name, value, e.target);
      }
  },
  
  render() {
    let props = this.props;
    
    return (
      <div>
        <label>{props.label}</label>
        <input
            type="text"
            name={props.name}
            onChange={this.handleChange}
            placeholder={props.placeholder} />
      </div>
    );
  }
});