Crafting = React.createClass({
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
      <TabMenu className="icon">
        <Tab tab="Smithing" active={true}>
          <Button className="labeled icon">
            <i className="icon">
              <Icon icon="anvil" size="tiny" />
            </i>
            Smithing
          </Button>
        </Tab>
        <Tab tab="Smelting">
          <Button className="labeled icon">
            <i className="icon">
              <Icon icon="brick-pile" size="tiny" />
            </i>
            Smelting
          </Button>
        </Tab>
        <Tab tab="Alchemy">
          <Button className="labeled icon">
            <i className="icon">
              <Icon icon="fizzing-flask" size="tiny" />
            </i>
            Alchemy
          </Button>
        </Tab>
        <Tab tab="Cooking">
          <Button className="labeled icon">
            <i className="icon">
              <Icon icon="cooking-pot" size="tiny" />
            </i>
            Cooking
          </Button>
        </Tab>
        <Tab tab="Carpentry">
          <Button className="labeled icon">
            <i className="icon">
              <Icon icon="hand-saw" size="tiny" />
            </i>
            Carpentry
          </Button>
        </Tab>
        <Tab tab="Jewelcrafting">
          <Button className="labeled icon">
            <i className="icon">
              <Icon icon="diamond-hard" size="tiny" />
            </i>
            Jewelcrafting
          </Button>
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
    </div>;
  }
});