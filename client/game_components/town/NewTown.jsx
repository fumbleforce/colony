NewTown = React.createClass({
  mixins: [ReactMeteorData],
  
  propTypes: {

  },
  
  getMeteorData() {
    return {
      
    }
  },
  
  getInitialState() {
    return {
      errors: []
    }
  },
  
  establishTown (e) {
    e.preventDefault();
    e.stopPropagation();
    console.log("Establishing town");
    
    let town = {
      townName: this.state.townName,
      mayorName: this.state.mayorName,
      supplies: this.state.supplies,
      environment: this.state.environment
    };
    
    console.log(town);
    
    let errors = [];
    _.each(town, (val, key) => {
      if (_.isUndefined(val)) {
        errors.push({
          error: "Missing field",
          reason: `Missing the ${U.labelify(key)} field.`
        });
      }
    });
    
    if (!errors.length) {
      Meteor.call("town/create", town, (err, res) => {
        if (err) {
          this.setState({ errors: [err] });
        }
      });
      return;
    }
    
    this.setState({ errors });
    
  },
  
  handleInput (key, value) {
    console.log(key, value);
    let state = {};
    state[key] = value
    this.setState(state);
  },
  
  render() {
    const segmentStyle = {
      maxWidth: "450px",
      margin: "0 auto"
    };
    
    const environments = [
      {
        name: "Swamp",
        value: "swamp"
      },
      {
        name: "Mountains",
        value: "mountains"
      },
      {
        name: "Grasslands",
        value: "grasslands"
      },
    ];
    
    const supplies = [
      {
        name: "Trade focus",
        value: "trade"
      },
      {
        name: "Exploration focus",
        value: "exploration"
      },
      {
        name: "Crafting focus",
        value: "crafting"
      },
      {
        name: "Gathering focus",
        value: "gathering"
      },
      {
        name: "Warmonger focus",
        value: "warmonger"
      },
      {
        name: "Piracy focus",
        value: "piracy"
      },
      {
        name: "Diplomacy focus",
        value: "diplomacy"
      },
    ];
    
    
    
    return (
      <div className="ui container">
        <h1 className="ui center aligned header">New town</h1>
        
        <Segment style={segmentStyle}>
          
          {this.state.errors.map((error) => {
            return <div key={error.reason} className="ui message warning">
              <div className="header">{error.error}</div>
              {error.reason}
            </div>
          })}
        
          <Form onSubmit={this.establishTown}>
            <Field>
              <Input
                name="townName"
                placeholder="Town name"
                label="Town name"
                onChange={this.handleInput} />
            </Field>
            <Field>
              <Input
                name="mayorName"
                placeholder="Mayor name"
                label="Mayor name"
                onChange={this.handleInput} />
            </Field>
            <Field>
              <label>Environment</label>
              <Dropdown
                name="environment"
                onChange={this.handleInput}
                className="selection"
                default="Choose environment for town"
                options={environments}
                init={true} />
            </Field>
            <Field>
              <label>Supplies</label>
              <Dropdown
                name="supplies"
                onChange={this.handleInput}
                className="selection"
                default="Focus your supplies"
                options={supplies}
                init={true} />
            </Field>
          </Form> 
        </Segment>
        <Segment className="center aligned basic">
          <Button
            className="center aligned large green"
            type="button"
            onClick={this.establishTown}>
            
            Establish town
          </Button>
        </Segment>
      </div>
    );
  }
});