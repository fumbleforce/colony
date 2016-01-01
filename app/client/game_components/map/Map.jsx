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
    return {

    };
  },
  
  assignPlot (holder) {
    Meteor.call("plots/assign", holder);
  },
  
  deassignPlot (holder) {
    Meteor.call("plots/deassign", holder);
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
    
    return (
      <div className="ui container">
        
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
