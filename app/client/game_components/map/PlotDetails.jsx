PlotDetails = React.createClass({
  propTypes: {

  },
  
  getInitialState() {
    return {

    }
  },
  
  componentDidMount() {
      
  },
  
  render() {
    let {
      plot
    } = this.props;
    
    return <Segment>
      <h2 className="ui header">
        {U.labelify(plot.terrain.key)}
      </h2>
      
      <Table className="very basic">
        <thead>
          <tr>
            <th>Resource</th>
            <th>Distribution</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {U.arrayify(plot.terrain.resources).map((t) => {
            return <tr key={t.key}>
              <td>{U.labelify(t.key)}</td>
              <td>
                <Progress init={true} percent={t.value * 100} className="indicating" />
              </td>
              <td>{t.value}</td>
            </tr>;
          })}
        </tbody>
      </Table>
    </Segment>;
  }
});