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
  
  render() {
    return <div>
      <div className="ui horizontal labeled icon ten item menu">
        <a className="item" href="town">
            <i className="ico-citizens rpg-Icon5_72"></i>
            Town
        </a>
        <a className="item" href="market">
            <i className="ico-market rpg-Icons8_74"></i>
            Market
        </a>
        <a className="item" href="barracks">
            <i className="ico-barracks rpg-Icon3_32"></i>
            Barracks
        </a>
        <a className="item" href="gathering">
            <i className="ico-gathering rpg-Icon5_76"></i>
            Gathering
        </a>
        <a className="item" href="settlers">
            <i className="ico-settlers rpg-Icon6_01"></i>
            Settlers
        </a>
        <a className="item" href="treasury">
            <i className="ico-treasury rpg-Icons8_89"></i>
            Treasury
        </a>
        <a className="item" href="relations">
            <i className="rpg-Icon4_83"></i>
            Relations
        </a>
        <a className="item" href="inventory">
            <i className="ico-storage rpg-Icon3_92"></i>
            Inventory
        </a>
        <a className="item" href="exploration">
            <i className="ico-exploration rpg-Icon5_56"></i>
            Exploration
        </a>
        <a className="item" href="settings">
            <i className="ico-settings rpg-Icon7_55"></i>
            Settings
        </a>
      </div>
    </div>;
  }
});