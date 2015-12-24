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
              <i className="icon rpg small">
                <Icon icon="envelope" size="tiny" />
              </i>
              Letters
            </Tab>
            <Tab tab="People">
              <i className="icon rpg small">
                <Icon icon="backup" size="tiny" />
              </i>
              People
            </Tab>
            <Tab tab="Friends">
              <i className="icon rpg small">
                <Icon icon="ages" size="tiny" />
              </i>
              Friends
            </Tab>
            <Tab tab="Ignored">
              <i className="icon rpg small">
                <Icon icon="prisoner" size="tiny" />
              </i>
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