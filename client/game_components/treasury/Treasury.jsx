Treasury = React.createClass({
  mixins: [ReactMeteorData],
  
  propTypes: {

  },
  
  getMeteorData() {
    return {
      
    }
  },
  
  getInitialState() {
    return {

    }
  },
  
  componentDidMount() {
      
  },
  
  render() {
    let cashChartConfig = {
      series: [
        {
          name: "Cash",
          data: [100, 234, 310, 30, 312, 120, 200, 300]
        }
      ]
    };
    
    let sparklineConfig = {
      chart: {
        height: 100
      },
      series: [
        {
          color: "#fff",
          name: "Cash",
          data: [100, 234, 310, 30, 312, 120, 200, 300]
        }
      ]
    };
    
    
    return <div>
    
      <Grid className="two column">
        <Row>
          <Column>
          
            <Segment className="inverted green">
              <Grid className="two column">
                <Column>
                  <h2 className="ui inverted header center aligned">
                    Cash: {U.money(3002)}
                    <div className="sub header">
                      +{U.money(3002)} / day
                    </div>
                  </h2>
                </Column>
                <Column>
                  <Chart type="sparkline" config={sparklineConfig} />
                </Column>
              </Grid>
            </Segment>
            
            <Segment className="inverted green">
              <Grid className="two column">
                <Column>
                  <h2 className="ui inverted header center aligned">
                    Income: {U.money(3002)}
                    <div className="sub header">
                      +{U.money(3002)} / day
                    </div>
                  </h2>
                </Column>
                <Column>
                  <Chart type="sparkline" config={sparklineConfig} />
                </Column>
              </Grid>
            </Segment>
            
            <Segment className="inverted red">
              <Grid className="two column">
                <Column>
                  <h2 className="ui inverted header center aligned">
                    Expenses: {U.money(3002)}
                    <div className="sub header">
                      -{U.money(3002)} / day
                    </div>
                  </h2>
                </Column>
                <Column>
                  <Chart type="sparkline" config={sparklineConfig} />
                </Column>
              </Grid>
            </Segment>
            
          </Column>
          <Column>
            <Segment>
              <Chart type="line" config={cashChartConfig} />
            </Segment>
          </Column>
        </Row>
        
        <Row>      
          <Column>
            <Segment>
              <h2 className="center aligned">Income</h2>
              
              <Table className="very basic">
                <tbody>
                  <tr>
                    <td>
                      Taxes
                    </td>
                    <td>
                      {U.money(3440)}
                    </td>
                  </tr>
                  <tr>
                    <td>
                      Trading
                    </td>
                    <td>
                      {U.money(3440)}
                    </td>
                  </tr>
                  <tr>
                    <td>
                      Stalls
                    </td>
                    <td>
                      {U.money(3440)}
                    </td>
                  </tr>
                  <tr>
                    <td>
                      Exploration
                    </td>
                    <td>
                      {U.money(3440)}
                    </td>
                  </tr>
                  <tr>
                    <td>
                      Raiding
                    </td>
                    <td>
                      {U.money(3440)}
                    </td>
                  </tr>
                  <tr className="sum">
                    <th>
                      Total
                    </th>
                    <th>
                      {U.money(3211135)}
                    </th>
                  </tr>
                </tbody>
              </Table>
            </Segment>
          </Column>
          <Column>
            <Segment className="secondary">
              <h2 className="center aligned">Expenses</h2>
              <Table className="very basic">
                <tbody>
                  <tr>
                    <td>
                      Taxes
                    </td>
                    <td>
                      {U.money(3440)}
                    </td>
                  </tr>
                  <tr>
                    <td>
                      Trading
                    </td>
                    <td>
                      {U.money(3440)}
                    </td>
                  </tr>
                  <tr>
                    <td>
                      Stalls
                    </td>
                    <td>
                      {U.money(3440)}
                    </td>
                  </tr>
                  <tr>
                    <td>
                      Exploration
                    </td>
                    <td>
                      {U.money(3440)}
                    </td>
                  </tr>
                  <tr>
                    <td>
                      Raiding
                    </td>
                    <td>
                      {U.money(3440)}
                    </td>
                  </tr>
                  <tr className="sum">
                    <th>
                      Total
                    </th>
                    <th>
                      {U.money(3211135)}
                    </th>
                  </tr>
                </tbody>
              </Table>
            </Segment>
          </Column>
        </Row>
      </Grid>
      
    </div>;
  }
});