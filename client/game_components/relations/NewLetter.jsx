NewLetter = React.createClass({
  
  propTypes: {

  },

  getInitialState() {
    return {
      errors: []
    }
  },
  
  handleSubmit (e) {
    e.preventDefault();

    let letter = {
      to: ReactDOM.findDOMNode(this.refs.to).querySelector("input").value,
      title: this.state.title,
      message: this.state.message,
    };
    
    console.log(letter);
    
    let errors = [];
    _.each(letter, (val, key) => {
      if (_.isUndefined(val)) {
        errors.push({
          error: "Missing field",
          reason: `Missing the ${U.labelify(key)} field.`
        });
      }
    });
    
    if (!errors.length) {
      Meteor.call("letters/send", letter, (err, res) => {
        if (err) {
          this.setState({ errors: [err] });
        } else {
          if (this.props.done) {
            this.props.done();
          }
        }
      });
    }
    
    this.setState({ errors });
  },
  
  handleChange (key, value) {
    let state = {};
    state[key] = value;
    this.setState(state);
  },
  
  render() {
    return (
      <div>
      
        <Errors errors={this.state.errors} />
        
        <Form onSubmit={this.handleSubmit}>
          <Field>
            <Input
              label="To"
              ref="to"
              name="to"
              defaultValue={this.props.to}
              placeholder="username"
              onChange={this.handleChange} />
          </Field>
          <Field>
            <Input
              label="Title"
              name="title"
              placeholder="Title"
              onChange={this.handleChange} />
          </Field>
          <Field>
            <Input
              label="Message"
              name="message"
              type="textarea"
              onChange={this.handleChange} />
          </Field>
          <Field>
            <Button
              onClick={this.handleSubmit}
              className="green large"
              type="submit">
              
              Send
            </Button>
          </Field>
        </Form>
        
      </div>
    );
  }
});