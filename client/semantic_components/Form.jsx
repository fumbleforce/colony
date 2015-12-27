Form = React.createClass({
  mixins: [Mixins.classGenerator],
  
  render() {
    let props = this.props;
    
    return <form className={this.getClasses("ui", "form")}>
      {this.props.children}
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
    return { value: 50 };
  },
  
  handleInput (e) {
    console.log(e.target.value);
    this.setState({ value: e.target.value });
  },
  
  render() {
    let props = this.props;
    let value = this.state.value;
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
            <input style={rangeStyle} type="range" defaultValue={value} min={props.min} max={props.max} step={props.step} onInput={this.handleInput}/>
          </div>
        </Column>
        <Column>
            <span style={valueStyle}>{value} {props.postfix}</span>
        </Column>
      </Grid>
    }
    
    return <div className={this.getClasses("ui", "range slider")}>
      <input type="range" defaultValue={value} min={props.min} max={props.max} step={props.step} onInput={this.handleInput}/>
      <span style={valueStyle}>{value} {props.postfix}</span>
    </div>;
  }
});
