SettlementPage = React.createClass({
  
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
        <Tab tab="budget">
            <i className="icon">
              <Icon icon="brick-pile" size="tiny" />
            </i>
            Budget
        </Tab>
      </TabMenu>
      
      <TabContent tab="Population" active={true}>
        <Population />
      </TabContent>
      
      <TabContent tab="Development">
        <Development />
      </TabContent>
      
      <TabContent tab="Law">
        <LawAndPolicy />
      </TabContent>
      
      <TabContent tab="budget">
        <Budget />
      </TabContent>
      
    </div>;
  }
});