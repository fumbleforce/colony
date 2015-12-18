MainLayout = React.createClass({
  render() {
    return <div>
      <Header />
      
      <main className="">
        {this.props.content}
      </main>
      
      <Footer />
    </div>
  }
});