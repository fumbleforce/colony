

Icon = React.createClass({
  
  render () {
    let props = this.props;
    let width = "64";
    let height = "64";
    
    if (props.size === "small") {
      width = "32";
      height = "32";
    } else if (props.size === "tiny") {
      width = "16";
      height = "16";
    } else if (props.size === "large") {
      width = "128";
      height = "128";
    }
    
    let style = { height, width };

    if (props.centered) {
      style.margin = "0 auto";
    }
    
    return <img style={style} src={"/icons/" + this.props.icon + ".svg"} />
  }
});