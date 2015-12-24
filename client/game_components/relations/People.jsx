People = React.createClass({
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
  
  render() {
    return (
      <div>
      
      <Segment>
        <Input className="icon"> 
          <i className="ui search icon" />
          <input placeholder="Search name" />
        </Input>
      </Segment>
      
      </div>
    );
  }
});