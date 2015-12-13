Market = React.createClass({
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
      
      <TabMenu>
        <Tab tab="marketplace" active={true}>Marketplace</Tab>
        <Tab tab="caravans">Caravans</Tab>
        <Tab tab="trading">Trading</Tab>
        <Tab tab="connected-markets">Connected markets</Tab>
      </TabMenu>
      
      <TabContent tab="marketplace" active={true}>
        <Marketplace />
      </TabContent>
      
      <TabContent tab="caravans">
        <Caravans />
      </TabContent>
      
      <TabContent tab="trading">
        <Trading />
      </TabContent>
      
      <TabContent tab="connected-markets">
        <ConnectedMarkets />
      </TabContent>
      
    </div>;
  }
});