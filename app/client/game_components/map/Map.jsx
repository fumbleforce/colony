_ = lodash;


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
    
    const terrains = U.arrayify(Gamedata.plots.terrains);
    const numTerrains = terrains.length;
    
    const distribution = [
      [0, 10],
      [1, 50],
      [2, 20],
      [3, 10],
      [4, 30],
      [5, 10],
    ];
    
    const randomTerrain = () => terrains[U.weightedRandom(distribution)];
    
    _.each(_.range(-radius, radius + 1), (q) => {
      let r1 = Math.max(-radius, -q - radius);
      let r2 = Math.min(radius, -q + radius);
      
      _.each(_.range(r1, r2 + 1), (r) => {
        var s = -q-r;
        var h = Hex(q, r, s);
        h.key = Hex.ToKey(h);
        h.terrain = randomTerrain();
        
        const isBorder = r === r1 || r === r2 || q === -radius || q === radius;
        if (isBorder) {
          h.isBorder = true;
        }
        
        h.color = h.terrain.color;
        
        h.holder = "unused";
        mapDict[h.key] = h;
      });
    });
    
    let map = U.valueList(mapDict);
    
    return {
      map,
      radius,
      mapDict,
      scale: 1,
      assigning: false,
      selectedPlot: false,
      showCoords: false,
    };
  },
  
  assignPlot (holder) {
    this.setState({ assigning: holder });
    //Meteor.call("plots/assign", holder);
  },
  
  deassignPlot (holder) {
    Meteor.call("plots/deassign", holder);
  },
  
  changeScale (name, value) {
    this.setState({ scale: value });
  },
  
  handleMapClick (hex, e) {
    console.log("Clicked map", hex);
    /*
    console.log("holders", holders);
    const currentIndex = holders.findIndex((e) => e.key === hex.holder);
    console.log("current index", currentIndex);
    const nextIndex = currentIndex === holders.length - 1 ? 0 : currentIndex + 1;
    */
    let mapDict = this.state.mapDict;
    const assigning = this.state.assigning;
    const hexKey = Hex.ToKey(hex);
    this.setState({ selectedPlot: hexKey });
    
    if (assigning) {
      const holders = Gamedata.plots.holders;
      const newHolder = _.find(holders, (h) => h.key === this.state.assigning);
      
      // mapDict[hexKey].color = newHolder.color;
      mapDict[hexKey].icon = newHolder.icon;
      mapDict[hexKey].holder = newHolder.key;
      this.setState({ mapDict });
    }
    
    
  },
  
  isAssignActive (key) {
    return this.state.assigning === key;
  },
  
  toggleCoords (e) {
    console.log(e);
    this.setState({ showCoords: !this.state.showCoords });
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
    
    const hexmapConfig = {
      showCoords: this.state.showCoords,
      orientation: "pointy",
    };
    
    let {
      mapDict,
      radius,
      scale,
      map,
      selectedPlot
    } = this.state;
    
    if (selectedPlot) {
      selectedPlot = mapDict[selectedPlot];
    }
    
    return (
      <div>
        
        <Grid className="two column">
          <Column>
            {selectedPlot ? <PlotDetails plot={selectedPlot} /> : ""}
            
            
            <Grid className="internally celled two column">
              {U.arrayify(breakdown).map((holder) => {
                console.log(holder);
                return <Row key={holder.key}>
                  <Column>
                    <h3>
                      {U.labelify(holder.key)} ({holder.value})
                    </h3>
                  </Column>
                  <Column>
                    <Button
                      id={"assign-plot-" + holder.key}
                      active={this.isAssignActive(holder.key)}
                      onClick={() => this.assignPlot(holder.key)}>
                      Assign plot
                    </Button>
                  </Column>
                </Row>;
              })}
            </Grid>
            
            
          </Column>
          <Column className="ui inverted brown segment">
            <Hexmap
              height={600}
              radius={radius}
              scale={scale}
              config={hexmapConfig}
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
            
            <Checkbox
              name="showCoords"
              label="Show coordinates"
              onChange={this.toggleCoords} />
          </Column>
        </Grid>
          
        
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
