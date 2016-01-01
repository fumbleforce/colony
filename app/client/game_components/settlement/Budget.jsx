Budget = React.createClass({
  mixins: [ReactMeteorData],
  
  propTypes: {

  },
  
  getMeteorData() {
    return {
      settlement: Settlement.get()
    }
  },
  
  getInitialState() {
    return {

    }
  },
  
  handleBudgetChange (name, value) {
    let settlement = this.data.settlement;
    
    settlement.set(`budget.${name}`, value);
    settlement.save();
  },
  
  render() {
    let settlement = this.data.settlement || {};
    let policies = settlement.policies || {};
    let budget = settlement.budget || {};
    
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
              value={budget.militia}
              inline={true}
              label="Militia"
              min={0}
              max={100}
              name="militia"
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