MainLayout = React.createClass({
  render() {
    return <div>
      <Header />
      
      <main>
        {this.props.content}
      </main>
      
      <Footer />
    </div>
  }
});