MainLayout = React.createClass({
  render() {
    return <div className="body-container">
      
      <div className="body-sidebar">
        <Sidebar />
      </div>
      
      <div className="body-content">
        <Header />
        
        <main className="">
          {this.props.content}
        </main>
        
        <Footer />
      </div>
    </div>
  }
});