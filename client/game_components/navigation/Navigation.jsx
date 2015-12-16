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
    return <Menu className="horizontal inverted brown secondary pointing labeled icon ten item attached">
        <MenuItem active={this.isActive("/town")} href="/town">
            <i className="rpg-Icon5_72"></i>
            Town
        </MenuItem>
        <MenuItem active={this.isActive("/market")} href="/market">
            <i className="rpg-Icons8_74"></i>
            Market
        </MenuItem>
        <MenuItem active={this.isActive("/barracks")} href="/barracks">
            <i className="rpg-Icon3_32"></i>
            Barracks
        </MenuItem>
        <MenuItem active={this.isActive("/gathering")} href="/gathering">
            <i className="rpg-Icon5_76"></i>
            Gathering
        </MenuItem>
        <MenuItem active={this.isActive("/settlers")} href="/settlers">
            <i className="rpg-Icon6_01"></i>
            Settlers
        </MenuItem>
        <MenuItem active={this.isActive("/treasury")} href="/treasury">
            <i className="rpg-Icons8_89"></i>
            Treasury
        </MenuItem>
        <MenuItem active={this.isActive("/relations")} href="/relations">
            <i className="rpg-Icon4_83"></i>
            Relations
        </MenuItem>
        <MenuItem active={this.isActive("/inventory")} href="/inventory">
            <i className="rpg-Icon3_92"></i>
            Inventory
        </MenuItem>
        <MenuItem active={this.isActive("/exploration")} href="/exploration">
            <i className="rpg-Icon5_56"></i>
            Exploration
        </MenuItem>
        <MenuItem active={this.isActive("/settings")} href="/settings">
            <i className="rpg-Icon7_55"></i>
            Settings
        </MenuItem>
      </Menu>;
  }
});