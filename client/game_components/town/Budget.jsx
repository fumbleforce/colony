Budget = React.createClass({
  mixins: [ReactMeteorData],
  
  propTypes: {

  },
  
  getMeteorData() {
    return {
      town: Town.get()
    }
  },
  
  getInitialState() {
    return {

    }
  },
  
  handleBudgetChange (name, value) {
    let town = this.data.town;
    
    town.set(`budget.${name}`, value);
    town.save();
  },
  
  render() {
    let town = this.data.town || {};
    let policies = town.policies || {};
    let budget = town.budget || {};
    
    return <Segment className="basic">
      
      <h1 className="ui header">Budget</h1>
      
      <h2 className="ui header">
        Revenue
      </h2>
      
      <List className="divided">
        <Item>
            <Slider
              value={budget.taxRate}
              inline={true}
              label="Tax rate"
              min={0}
              max={100}
              name="taxRate"
              onChange={this.handleBudgetChange}
              postfix="%" />
        </Item>
        <Item>
            <Slider
              value={budget.tradeTariff}
              inline={true}
              label="Trade tariff"
              min={0}
              max={100}
              name="tradeTariff"
              onChange={this.handleBudgetChange}
              postfix="%" />
        </Item>
      </List>
      
      
      <h2 className="ui header">
        Expense
      </h2>
      
      <List className="divided">
        <Item>
            <Slider
              value={budget.police}
              inline={true}
              label="Police"
              min={0}
              max={100}
              name="police"
              onChange={this.handleBudgetChange}
              postfix="%" />
        </Item>
        <Item>
            <Slider
              value={budget.infrastructure}
              inline={true}
              label="Infrastructure"
              min={0}
              max={100}
              name="infrastructure"
              onChange={this.handleBudgetChange}
              postfix="%" />
        </Item>
        <Item>
            <Slider
              value={budget.military}
              inline={true}
              label="Military"
              min={0}
              max={100}
              name="military"
              onChange={this.handleBudgetChange}
              postfix="%" />
        </Item>
        <Item>
            <Slider
              inline={true}
              value={budget.administration}
              label="Administration"
              min={0}
              max={100}
              name="administration"
              onChange={this.handleBudgetChange}
              postfix="%" />
        </Item>
        
      </List>
      
      
    </Segment>;
  }
});