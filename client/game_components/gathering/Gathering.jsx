Gathering = React.createClass({
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
    return <div>
    
      <Items>
        <Item>
          <ItemContent header="Fields" meta="3 plots" />
          <ItemExtra>
            <Button>Expand</Button>
          </ItemExtra>
        </Item>
      </Items>
      
      <Grid columns="two">
        <Row>
          <Column>
            <Segment color="orange">
              <h3>Fields</h3>
              
              <p>Generates 23 grain / day</p>
            </Segment>
          </Column>
          <Column>
          
          </Column>
        </Row>
        
        <Row>
          <Column>
            <Segment color="brown">
              <h3>Lumber camps</h3>
              
              <p>Generates 23 logs / day</p>
            </Segment>
          </Column>
          <Column>
          
          </Column>
        </Row>
        
        <Row>
          <Column>
            <Segment color="pink">
              <h3>Pastures</h3>
              
              <p>Generates 32 meat / day</p>
            </Segment>
          </Column>
          <Column>
          
          </Column>
        </Row>
        
        <Row>
          <Column>
            <Segment color="grey">
              <h3>Quarry</h3>
              
              <p>Generates 3 stones / day</p>
            </Segment>
          </Column>
          <Column>
          
          </Column>
        </Row>
      </Grid>
    </div>;
  }
});