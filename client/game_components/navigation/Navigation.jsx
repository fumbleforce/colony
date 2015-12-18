Navigation = React.createClass({
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
  
  isActive (path) {
    return FlowRouter.current().path === path;
  },
  
  render() {
    let style = {
      "backgroundColor": "#efefef"
    };
    
    return <Menu style={style} className="horizontal secondary pointing labeled icon ten item attached">
        <Item type="link" active={this.isActive("/town")} href="/town">
            <i className="rpg-Icon5_72"></i>
            Town
        </Item>
        <Item type="link" active={this.isActive("/market")} href="/market">
            <i className="rpg-Icons8_74"></i>
            Market
        </Item>
        <Item type="link" active={this.isActive("/barracks")} href="/barracks">
            <i className="rpg-Icon3_32"></i>
            Barracks
        </Item>
        <Item type="link" active={this.isActive("/gathering")} href="/gathering">
            <i className="rpg-Icon5_76"></i>
            Gathering
        </Item>
        <Item type="link" active={this.isActive("/settlers")} href="/settlers">
            <i className="rpg-Icon6_01"></i>
            Settlers
        </Item>
        <Item type="link" active={this.isActive("/treasury")} href="/treasury">
            <i className="rpg-Icons8_89"></i>
            Treasury
        </Item>
        <Item type="link" active={this.isActive("/relations")} href="/relations">
            <i className="rpg-Icon4_83"></i>
            Relations
        </Item>
        <Item type="link" active={this.isActive("/inventory")} href="/inventory">
            <i className="rpg-Icon3_92"></i>
            Inventory
        </Item>
        <Item type="link" active={this.isActive("/exploration")} href="/exploration">
            <i className="rpg-Icon5_56"></i>
            Exploration
        </Item>
        <Item type="link" active={this.isActive("/settings")} href="/settings">
            <i className="rpg-Icon7_55"></i>
            Settings
        </Item>
      </Menu>;
  }
});