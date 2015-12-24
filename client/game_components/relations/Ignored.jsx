Ignored = React.createClass({
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
  
  renderItemButtons () {
    return <Buttons>
      <Button>Remove</Button>
    </Buttons>;
  },
  
  render() {
    return (
      <div>
      
        <List className="divided">
          <Item header="Bob the nagger" description="Ignored 1/12/2015" right={this.renderItemButtons()} />
          <Item header="Joe the nagger" description="Ignored 1/12/2015" right={this.renderItemButtons()} />
          <Item header="Shmoe the nagger" description="Ignored 1/12/2015" right={this.renderItemButtons()} />
          <Item header="xXNighght_DKXx the nagger" description="Ignored 1/12/2015" right={this.renderItemButtons()} />
          <Item header="Ape the nagger" description="Ignored 1/12/2015" right={this.renderItemButtons()} />
            
        </List>
      
      </div>
    );
  }
});