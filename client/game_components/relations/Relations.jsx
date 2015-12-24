Relations = React.createClass({
  mixins: [ReactMeteorData],
  
  propTypes: {

  },
  
  getMeteorData () {
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
    
      <Grid>
        <Column className="four wide">
          <TabMenu className="vertical fluid icon pointing">
            <Tab tab="Letters" active={true}>
              <Icon icon="envelope" size="small" />
              Letters
            </Tab>
            <Tab tab="People">
              <Icon icon="backup" size="small" />
              People
            </Tab>
            <Tab tab="Friends">
              <Icon icon="ages" size="small" />
              Friends
            </Tab>
            <Tab tab="Ignored">
              <Icon icon="prisoner" size="small" />
              Ignored
            </Tab>
          </TabMenu>
        </Column>
        <Column className="twelve wide">
          <TabContent tab="Letters" active={true}>
            <Letters />
          </TabContent>
          
          <TabContent tab="People">
            <People />
          </TabContent>
          
          <TabContent tab="Friends">
            <Friends />
          </TabContent>
          
          <TabContent tab="Ignored">
            <Ignored />
          </TabContent>
                  
        </Column>
    
      </Grid>
    </div>;
  }
});