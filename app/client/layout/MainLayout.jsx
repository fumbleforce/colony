MainLayout = React.createClass({
  mixins: [ReactMeteorData],
  
  getMeteorData () {
    let settlementCount = -1;
    
    let settlementSub = Meteor.subscribe("settlements");
    
    if (settlementSub.ready()) {
      settlementCount = Settlement.find({ userId: Meteor.userId() }).count();
    }
    
    return {
      loggedIn: !!Meteor.userId(),
      loggingIn: Meteor.loggingIn(),
      settlementCount,
      sidebarOpen: Session.get("sidebarOpen")
    };
  },
  
  renderLogin () {
    return <div className="body-container">
      <Grid className="one column centered container">
        <Column style={{ maxWidth: "400px" }}>
          <AtFormReact />
        </Column>
      </Grid>
    </div>;
  },
  
  renderCreateSettlement () {
    return <div className="body-container">
      <div className="body-content">
        <span id="logged-in" />
        <main>
          <NewSettlement />
        </main>
      </div>
    </div>;
  },
  
  renderGameLayout () {
    let content = this.props.content;
    let sidebarOpen = this.data.sidebarOpen;
    
    return <div className="body-container">
      <span id="logged-in" />
      <span id="in-game" />
      
      {sidebarOpen ? <div className="body-sidebar large screen hidden slideout">
        <Status />
      </div> : ""}
      
      <div className="body-sidebar large screen only">
        <Status />
      </div>
      
      <div className="body-content">
        <Header />
        
        <main>
          {content}
        </main>
        
        <Footer />
      </div>
    </div>;
  },
  
  render () {
    let {
      loggingIn,
      loggedIn,
      settlementCount,
    } = this.data;
    
    if (loggingIn || settlementCount === -1) {
      return <Loading />;
    } else if (!loggedIn) {
      return this.renderLogin();
    } else if (!settlementCount) {
      return this.renderCreateSettlement();
    }
    return this.renderGameLayout();
  }
});
