TownView = React.createClass({
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
      
      <TabMenu className="secondary pointing icon">
        <Tab tab="Population" active={true}>
            <i className="icon">
              <Icon icon="anvil" size="tiny" />
            </i>
            Population
        </Tab>
        <Tab tab="Development">
            <i className="icon">
              <Icon icon="fizzing-flask" size="tiny" />
            </i>
            Development
        </Tab>
        <Tab tab="Law">
            <i className="icon">
              <Icon icon="brick-pile" size="tiny" />
            </i>
            Law and Policy
        </Tab>
      </TabMenu>
      
      <TabContent tab="Population" active={true}>
        <Population {...this.props} />
      </TabContent>
      
      <TabContent tab="Development">
        <Development {...this.props} />
      </TabContent>
      
      <TabContent tab="Law">
        <LawAndPolicy {...this.props} />
      </TabContent>
      
    </div>;
  }
});