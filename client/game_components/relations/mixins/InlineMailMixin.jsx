Mixins.InlineNewLetter = {
  getInitialState() {
    return {
      inlineNewLetter: false,
    }
  },
  
  toggleInlineNewLetter () {
    this.setState({ inlineNewLetter: !this.state.inlineNewLetter });
  },
  
  renderNewLetter (to) {
    if (this.state.inlineNewLetter) {
      return <NewLetter to={to} done={this.toggleInlineNewLetter} />
    }
  },
};