SortingMenu = React.createClass({
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

      <div className="ui segment left floated"> 
        <h2>Sorting</h2>

        <div className="ui buttons">
	        <button className="ui button">Boxes</button>
	        <button className="ui button" tabIndex="0">List</button>
  			</div>      
	      
  			<div className="ui hidden divider"></div>

        <div className="ui search">
          <input className="prompt" type="text" placeholder="Search..." />
          <div className="results"></div>
        </div>
        

        <h3>Categories</h3>
        <div className="ui vertical fluid blue buttons">
	        <div className="ui button">
	          Food
	        </div>
	        <div className="ui button">
	          Weapon
	        </div>
	        <div className="ui button">
	          Tools
	        </div>
        </div>

      </div>
    </div>;
  }
});