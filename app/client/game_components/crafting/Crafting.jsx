CraftingPage = React.createClass({
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
    
      <Grid>
        <Column className="ten wide">
          <TabMenu className="secondary pointing icon">
            <Tab tab="Smithing" active={true}>
                <i className="icon">
                  <Icon icon="anvil" size="tiny" />
                </i>
                Smithing
            </Tab>
            <Tab tab="Smelting">
                <i className="icon">
                  <Icon icon="brick-pile" size="tiny" />
                </i>
                Smelting
            </Tab>
            <Tab tab="Alchemy">
                <i className="icon">
                  <Icon icon="fizzing-flask" size="tiny" />
                </i>
                Alchemy
            </Tab>
            <Tab tab="Cooking">
                <i className="icon">
                  <Icon icon="cooking-pot" size="tiny" />
                </i>
                Cooking
            </Tab>
            <Tab tab="Carpentry">
                <i className="icon">
                  <Icon icon="hand-saw" size="tiny" />
                </i>
                Carpentry
            </Tab>
            <Tab tab="Jewelcrafting">
                <i className="icon">
                  <Icon icon="diamond-hard" size="tiny" />
                </i>
                Jewelcrafting
            </Tab>
          </TabMenu>
          
          <TabContent tab="Smithing" active={true}>
            <Smithing />
          </TabContent>
          
          <TabContent tab="Smelting">
            <Smelting />
          </TabContent>
          
          <TabContent tab="Alchemy">
            <Alchemy />
          </TabContent>
          
          <TabContent tab="Cooking">
            <Cooking />
          </TabContent>
          
          <TabContent tab="Carpentry">
            <Carpentry />
          </TabContent>
          
          <TabContent tab="Jewelcrafting">
            <Jewelcrafting />
          </TabContent>
      
        </Column>
        <Column className="six wide">
          <h3 className="ui header">
            Production line
          </h3>
          <List>
            <Item right=<Button>X</Button>>Shiny boots</Item>
          </List>
        </Column>
      </Grid>
    </div>;
  }
});