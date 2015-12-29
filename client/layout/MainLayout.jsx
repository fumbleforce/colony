MainLayout = React.createClass({
    mixins: [ReactMeteorData],
  
  getMeteorData() {
    console.log(Meteor.userId());
    
    
    let username = Meteor.user() && Meteor.user().username;
    let towns = [];
    let townCount = -1;
    
    let townSub = Meteor.subscribe("towns");
    
    if (townSub.ready()) {
      towns = Town.find({ userId: Meteor.userId() }).fetch();
      console.log("towns", towns);
      townCount = towns.length;
    }
    
    return {
      currentUser: Meteor.user(),
      loggedIn: !!Meteor.userId(),
      loggingIn: Meteor.loggingIn(),
      username,
      townCount,
      towns,
      town: towns[0]
    }
  },
  
  getInitialState() {
    return {

    }
  },
  
  renderLogin () {
    return <div className="body-container">
      <AtFormReact />
    </div>
  },
  
  renderCreateTown (){
    return <div className="body-container">
      <div className="body-content">
        <main className="">
          <NewTown />
        </main>
      </div>
    </div>
  },
  
  renderGameLayout () {
    let data = this.data;
    let content = React.cloneElement(this.props.content, { data });
    
    return <div className="body-container">
      <div className="body-sidebar">
        <Status data={this.data} />
      </div>
      
      <div className="body-content">
        <Header />
        
        <main className="">
          {content}
        </main>
        
        <Footer />
      </div>
    </div>
  },
  
  render() {
    let {
      loggingIn,
      loggedIn,
      townCount,
      currentUser
    } = this.data;
    
    if (loggingIn || townCount === -1) {
      console.log("Logging in");
      return <Loading />;
    } else if (!loggedIn) {
      console.log("Not logged in, rendering Login screen");
      return this.renderLogin();
    } else if (!townCount) {
      console.log("No town, going to creation screen");
      return this.renderCreateTown();
    } else {
      console.log("Logged in, going to game");
      return this.renderGameLayout();
    }
  }
});
