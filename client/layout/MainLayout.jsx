MainLayout = React.createClass({
  render() {
    return <div>
      <Header />
      
      <main className="ui container">
        {this.props.content}
      </main>
      
      <Footer />
    </div>
  }
});