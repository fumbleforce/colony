ContentBox = React.createClass({
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

  renderListLayout() {
  	return <div>
			List
		</div>
  },

  renderIconLayout() {
  	return <div className="ui very relaxed horizontal list">
			<div className="item">
				<div className="ui bottom right attached label">
					// {this.props.quantity}
					43
				</div>
				<img class="ui avatar image" src=" " alt="icon" />

			</div>
		</div>;
  },
  
  render() {
    return <div>
      // Function to show icons vs lines 
      {this.props.style == "icons" ? this.renderIconLayout() : this.renderListLayout() }
    </div>;
  }
 })
