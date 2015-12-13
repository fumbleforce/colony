TownPolicies = React.createClass({
  mixins: [ReactMeteorData],
  
  propTypes: {

  },
  
  getMeteorData() {
    return {
      
    }
  },
  
  getInitialState() {
    return {

    }
  },
  
  componentDidMount() {
      
  },
  
  render() {
    return <Segment className="basic">
      
      <h2 className="ui header">Policies</h2>
    
      <Form>
        <Field>
          <label>Tax rate</label>
          <Slider min={0} max={100} postfix="%" />
        </Field>
        <Field>
          <label>Establishment fee</label>
          <Slider min={0} max={1000} postfix="$" />
        </Field>
        <Field>
          <label>Tax rate</label>
          <Slider min={0} max={100} />
        </Field>
        <Field>
          <label>Tax rate</label>
          <Slider min={0} max={100} />
        </Field>
      </Form>
    </Segment>;
  }
});