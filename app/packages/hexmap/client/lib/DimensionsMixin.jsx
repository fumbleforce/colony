
function getWidth (element) {
  return element.clientWidth
}

function getHeight (element) {
  return element.clientHeight
}

DimensionsMixin = {
  updateDimensions () {
    const container = this.refs.container;
    if (!container) {
      throw new Error('Cannot find container div');
    }
    this.setState({
      containerWidth: getWidth(container),
      containerHeight: getHeight(container)
    });
  },

  onResize () {
    if (this.rqf) return;
    this.rqf = window.requestAnimationFrame(() => {
      this.rqf = null
      this.updateDimensions()
    });
  },

  componentDidMount () {
    this.updateDimensions();
    window.addEventListener('resize', this.onResize, false);
  },

  componentWillUnmount () {
    window.removeEventListener('resize', this.onResize);
  },
};