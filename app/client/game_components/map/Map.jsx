MapPage = React.createClass({
  mixins: [ReactMeteorData],
  
  propTypes: {

  },
  
  getMeteorData () {
    let settlement = Settlement.get();
    
    return {
      settlement
    };
  },
  
  getInitialState () {
    let radius = 4; 
    let mapDict = {};
    
    _.each(_.range(-radius, radius + 1), (q) => {
      let r1 = Math.max(-radius, -q - radius);
      let r2 = Math.min(radius, -q + radius);
      
      _.each(_.range(r1, r2 + 1), (r) => {
        var h = Hex(q, r, -q-r);
        h.color = "#660000";
        mapDict[Hex.ToKey(h)] = h;
      });
    });
    
    let map = U.valueList(mapDict);
    
    return {
      map,
      radius,
      mapDict,
      scale: 1
    };
  },
  
  assignPlot (holder) {
    Meteor.call("plots/assign", holder);
  },
  
  deassignPlot (holder) {
    Meteor.call("plots/deassign", holder);
  },
  
  changeScale (name, value) {
    this.setState({ scale: value });
  },
  
  handleMapClick (hex, e) {
    console.log("Clicked map", hex);
    let mapDict = this.state.mapDict;
    mapDict[Hex.ToKey(hex)].color = "#000";
    this.setState({ mapDict });
  },
  
  render () {
    let settlement = this.data.settlement;
    let plots = settlement.plots;
    let breakdown = plots.breakdown;
    let total = plots.total;
    let used = value = U.sumObj(breakdown);
    let unUsed = total - used;
    let percentUsed = Math.floor(100 * used / total);

    let colors = {
      trade: "yellow",
      militia: "green",
      crafting: "teal",
      gathering: "orange",
      settlements: "red"
    };
    
    let {
      mapDict,
      radius,
      scale,
      map,
    } = this.state;
    
    return (
      <div className="ui container">
      
        <Hexmap
          width={800}
          height={600}
          radius={radius}
          scale={scale}
          orientation="pointy"
          onClick={this.handleMapClick}
          hexes={map} />
          
        <Slider
          label="Scale"
          name="scale"
          value={scale}
          inline={true}
          onChange={this.changeScale}
          min={0.2}
          max={5}
          step={0.01} />
        
        <Progress
          init={true}
          value={value}
          total={total}
          label="Plot utilization"
          className="indicating large" />
        
        <Grid className="internally celled three column">
          {U.arrayify(breakdown).map((holder) => {
            return <Row key={holder.key}>
              <Column>
                <h3>
                  {U.labelify(holder.key)} ({holder.value})
                </h3>
              </Column>
              <Column>
                {holder.value ?
                  _.range(holder.value).map((i) => {
                    return <PlotBox
                      key={holder.key + i}
                      className={holder.key + "-plot"}
                      color={colors[holder.key]} />;
                  }) : <p>No plots</p>
                }
              </Column>
              <Column>
                <Button id={"assign-plot-" + holder.key} onClick={() => this.assignPlot(holder.key)}>
                  Assign plot
                </Button>
                <Button id={"deassign-plot-" + holder.key} onClick={() => this.deassignPlot(holder.key)}>
                  Deassign plot
                </Button>
              </Column>
            </Row>;
          })}
        </Grid>
        
        <Menu className="horizontal three item fluid labeled icon menu">
          <Item type="link" >
              <i className="icon">
                <Icon icon="sawed-off-shotgun" size="small" />
              </i>
              Conquer a plot
          </Item>
          <Item type="link" >
              <i className="icon">
                <Icon icon="shaking-hands" size="small" />
              </i>
              Negotiate transfer of a plot
          </Item>
          <Item type="link" >
              <i className="icon">
                <Icon icon="swap-bag" size="small" />
              </i>
              Purchase a plot
          </Item>
          
        </Menu>
      </div>
    );
  }
});

PlotBox = React.createClass({
  render () {
    let style = {
      width: "25px",
      height: "25px",
      margin: "3px",
      backgroundColor: "gray",
      display: "inline-block"
    };
    
    let {
      className,
      ...other
    } = this.props;
    
    className = className || "";
    className += " inverted";
    
    return (
      <Segment {...other} className={className} style={style} />
    );
  }
});
