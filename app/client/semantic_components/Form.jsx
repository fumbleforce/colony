Form = React.createClass({
  mixins: [Mixins.classGenerator],
  
  render() {
    let {
      children,
      className,
      ...others
    } = this.props;
    
    return <form {...others} className={this.getClasses("ui", "form")}>
      {children}
    </form>;
  }
});

Field = React.createClass({
  mixins: [Mixins.classGenerator],
  
  render() {
    let props = this.props;
    
    return <div className={this.getClasses("field")}>
      {this.props.children}
    </div>;
  }
});


Fields = React.createClass({
  mixins: [Mixins.classGenerator],
  
  render() {
    let props = this.props;
    
    return <div className={this.getClasses("fields")}>
      {this.props.children}
    </div>;
  }
});

Slider = React.createClass({
  mixins: [Mixins.classGenerator],
  
  getDefaultProps () {
    return {
      min: 0,
      max: 100,
      step: 1,
      postfix: ""
    };
  },
  
  getInitialState: function() {
    return { value: this.props.value };
  },
  
  handleInput (e) {
    let value = +e.target.value;
    this.setState({ value });
    
    if (this.props.onChange) {
      this.props.onChange(this.props.name, value);
    }
  },
  
  render() {
    let props = this.props;
    let defaultValue = this.props.value;
    let valueStyle = {
      "marginLeft": "10px",
      "verticalAlign": "super"
    };
    
    let rangeStyle = {
      "width": "100%"
    };
    
    if (props.inline) {
      return <Grid className="three column">
        <Column>
          <b>{props.label}</b>
        </Column>
        <Column>
          <div className={this.getClasses("ui", "range slider")}>
            <input
              style={rangeStyle}
              type="range"
              defaultValue={defaultValue}
              min={props.min}
              max={props.max}
              step={props.step}
              onInput={this.handleInput}/>
          </div>
        </Column>
        <Column>
            <span style={valueStyle}>{this.state.value} {props.postfix}</span>
        </Column>
      </Grid>
    }
    
    return <div className={this.getClasses("ui", "range slider")}>
      <input
        type="range"
        name={props.name}
        defaultValue={value}
        min={props.min}
        max={props.max}
        step={props.step}
        onInput={this.handleInput}/>
      <span style={valueStyle}>{value} {props.postfix}</span>
    </div>;
  }
});
