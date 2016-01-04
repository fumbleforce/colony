Inventory = React.createClass({
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
        <Tab tab="town" active={true}>Town</Tab>
        <Tab tab="caravans">Caravans</Tab>
        <Tab tab="otherTowns">Other Towns</Tab>
      </TabMenu>
      
      <TabContent tab="town" active={true}>
        <SortingMenu />
        <ContentBox place="town"/>
      </TabContent>
      
      <TabContent tab="caravans">
        <SortingMenu />
        <ContentBox />
      </TabContent>
      
      <TabContent tab="otherTowns">
        <SortingMenu />
        <ContentBox />
      </TabContent>

    </div>;
  }
});