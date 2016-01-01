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
      //"backgroundColor": "#efefef"
    };
    
    return <Menu style={style} className="horizontal fluid attached labeled icon navigation-menu">
        <Item type="link" active={this.isActive("/settlement")} href="/settlement">
            <i className="icon rpg rpg-Icon5_72"></i>
            Settlement
        </Item>
        <Item type="link" active={this.isActive("/market")} href="/market">
            <i className="icon rpg rpg-Icons8_74"></i>
            Market
        </Item>
        <Item type="link" active={this.isActive("/barracks")} href="/barracks">
            <i className="icon rpg rpg-Icon3_32"></i>
            Barracks
        </Item>
        <Item type="link" active={this.isActive("/gathering")} href="/gathering">
            <i className="icon">
              <Icon icon="mine-wagon" size="small" />
            </i>
            Gathering
        </Item>
        <Item type="link" active={this.isActive("/crafting")} href="/crafting">
            <i className="icon">
              <Icon icon="stone-crafting" size="small" />
            </i>
            Crafting
        </Item>
        <Item type="link" active={this.isActive("/map")} href="/map">
            <i className="icon">
              <Icon icon="treasure-map" size="small" />
            </i>
            Map
        </Item>
        <Item type="link" active={this.isActive("/treasury")} href="/treasury">
            <i className="icon">
              <Icon icon="cash" size="small" />
            </i>
            Treasury
        </Item>
        <Item type="link" active={this.isActive("/relations")} href="/relations">
            <i className="icon rpg rpg-Icon4_83"></i>
            Relations
        </Item>
        <Item type="link" active={this.isActive("/inventory")} href="/inventory">
            <i className="icon">
              <Icon icon="chest" size="small" />
            </i>
            Inventory
        </Item>
        <Item type="link" active={this.isActive("/exploration")} href="/exploration">
            <i className="icon">
              <Icon icon="spyglass" size="small" />
            </i>
            Exploration
        </Item>
        <Item type="link" active={this.isActive("/newsboard")} href="/newsboard">
            <i className="icon newspaper"></i>
            News board
        </Item>
        
        
        <Item type="link" active={this.isActive("/settings")} href="/settings" className="right">
            <i className="icon rpg rpg-Icon7_55"></i>
            Settings
        </Item>
      </Menu>;
  }
});