
MapPage = React.createClass({
  mixins: [ReactMeteorData],
  
  getMeteorData () {
    let settlement = Settlement.get();
    let mapDict = settlement.map;
    let map = U.valueList(mapDict.map);
    
    return {
      settlement,
      map,
      mapDict,
    };
  },
  
  getInitialState () {
    return {
      scale: 1,
      assigning: false,
      selectedPlot: false,
      hexmapConfig: {
        showCoords: false,
        orientation: "pointy",
      }
    };
  },
  
  assignPlot (holder) {
    if (this.state.assigning === holder) {
      this.setState({ assigning: false });
    } else {
      this.setState({ assigning: holder });
    }
    //Meteor.call("plots/assign", holder);
  },
  
  deassignPlot (holder) {
    Meteor.call("plots/deassign", holder);
  },
  
  changeScale (name, value) {
    this.setState({ scale: value });
  },
  
  expandMap () {
    Meteor.call("map/expand", (err, res) => {
      
    });
  },
  
  handleMapClick (hex, e) {
    let mapDict = this.state.mapDict;
    const assigning = this.state.assigning;
    const hexKey = Hex.ToKey(hex);
    this.setState({ selectedPlot: hexKey });
    
    if (assigning) {
      
      Meteor.call("plots/assign", {
        key: hexKey,
        holderKey: this.state.assigning
      }, (err, res) => {

      });
    }
  },
  
  isAssignActive (key) {
    return this.state.assigning === key;
  },
  
  toggleCoords (e) {
    let hexmapConfig = this.state.hexmapConfig;
    hexmapConfig.showCoords = !hexmapConfig.showCoords;
    this.setState({ hexmapConfig });
  },
  
  render () {
    let {
      selectedPlot,
      hexmapConfig,
      scale
    } = this.state;
    
    let {
      map,
      mapDict,
      settlement
    } = this.data;
    
    let plots = settlement.plots;
    let breakdown = settlement.getPlotBreakdown();
    let total = plots.total;
    let used = value = U.sumObj(breakdown);
    let unUsed = total - used;
    let percentUsed = Math.floor(100 * used / total);
    let radius = mapDict.radius;

    const colors = {
      trade: "yellow",
      militia: "green",
      crafting: "teal",
      gathering: "orange",
      settlements: "red"
    };
    
    if (selectedPlot) {
      selectedPlot = mapDict.map[selectedPlot];
    }
    
    return (
      <div>
        <Grid className="two column stackable">
          <Column>
            {selectedPlot ? <PlotDetails plot={selectedPlot} /> : ""}
            
            
            <Grid className="internally celled two column">
              {U.arrayify(breakdown).map((holder) => {
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
            
            <Menu className="horizontal three item fluid labeled icon menu">
              <Item type="link" onClick={this.expandMap}>
                  <i className="icon">
                    <Icon icon="sawed-off-shotgun" size="small" />
                  </i>
                  Conquer a plot
              </Item>
              <Item type="link" onClick={this.expandMap}>
                  <i className="icon">
                    <Icon icon="shaking-hands" size="small" />
                  </i>
                  Negotiate transfer of a plot
              </Item>
              <Item type="link" onClick={this.expandMap}>
                  <i className="icon">
                    <Icon icon="swap-bag" size="small" />
                  </i>
                  Purchase a plot
              </Item>
              
            </Menu>
          </Column>
          <Column className="ui inverted brown segment noselect">
            <Hexmap
              height={600}
              radius={radius}
              scale={scale}
              config={hexmapConfig}
              draggable={true}
              onClick={this.handleMapClick}
              hexes={map}>
              
              <defs>
                <pattern id="mountains" width="15" height="15" patternUnits="userSpaceOnUse" x="0" y="0">
                  <rect width="15" height="15" fill="#4f638d"/>
                  <path d="M0 15L7.5 0L15 15Z" fill="#303355"/>
                </pattern>
                
                <pattern id="tundra" width="20" height="9">
                  <rect width="20" height="9" fill="#f2f2f2"/>
                  <rect width="20" height="2" fill="#e7e7e7"/>
                  <rect y="2" width="20" height="3" fill="#ececec"/>
                </pattern>
                
                <pattern id="forest" width="40" height="40" viewBox="0 0 20 20">
                  <rect width="40" height="40" fill="#8a3"/>
                  <circle r="9.2" strokeWidth="1" stroke="#613" fill="none"/>
                  <circle cy="18.4" r="9.2" strokeWidth="1px" stroke="#613" fill="none"/>
                  <circle cx="18.4" cy="18.4" r="9.2" strokeWidth="1" stroke="#613" fill="none"/>
                </pattern>
                
                <pattern id="grasslands" width="70" height="70">
                  <rect width="70" height="70" fill="#bbd817"/>
                  <g transform="rotate(45)">
                  <rect width="99" height="25" fill="#a9ce00"/>
                  <rect y="-50" width="99" height="25" fill="#a9ce00"/>
                  </g>
                </pattern>
                
                <patterns id="hills" width='60' height='30'>
                  <defs>
                    <rect id='r' width='30' height='15' fill='#bb085f' strokeWidth='2.5' stroke='#7a054d'/>
                    <g id='p'>
                    <use xlinkHref='#r'/>
                    <use y='15' xlinkHref='#r'/>
                    <use y='30' xlinkHref='#r'/>
                    <use y='45' xlinkHref='#r'/>
                    </g>
                  </defs>
                  <use xlinkHref='#p' transform='translate(0 -25) skewY(40)'/>
                  <use xlinkHref='#p' transform='translate(30 0) skewY(-40)'/>
                </patterns>
              </defs>
              
            </Hexmap>
    
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
