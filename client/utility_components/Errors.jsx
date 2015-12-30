Errors = React.createClass({
  
  propTypes: {
    errors: React.PropTypes.array
  },
  
  render () {
    return (
      <div>
        {this.props.errors.map((error) => {
          return <div key={error.reason} className="ui warning message">
            <div className="header">
              {error.error}
            </div>
            {error.reason}
          </div>
        })}
      </div>
    );
  }
});