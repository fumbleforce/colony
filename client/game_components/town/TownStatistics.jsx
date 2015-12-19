TownStatistics = React.createClass({
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
    return <Segment className="secondary">
      
      <Grid className="two column">
        <Column>
          <h4>Professions</h4>
          <Table className="very basic">
            <tbody>
              <tr>
               <td>
                Settlers
                </td>
                <td>
                 {1200}
                </td>
              </tr>
              <tr>
               <td>
                Explorers
                </td>
                <td>
                 {10}
                </td>
              </tr>
              <tr>
               <td>
                Militiamen
                </td>
                <td>
                 {1500}
                </td>
              </tr>
              <tr>
               <td>
                Traders
                </td>
                <td>
                 {200}
                </td>
              </tr>
            </tbody>
          </Table>
        </Column>
        <Column>
          <h4>Population</h4>
          <Table className="very basic">
            <tbody>
              <tr>
               <td>
                Immigrants
                </td>
                <td>
                 122 / yr
                </td>
              </tr>
              <tr>
               <td>
                Births
                </td>
                <td>
                 122 / yr
                </td>
              </tr>
              <tr>
               <td>
                Deaths
                </td>
                <td>
                 222 / yr
                </td>
              </tr>
              <tr>
               <td>
                Growth
                </td>
                <td>
                 2.3 %
                </td>
              </tr>
            </tbody>
          </Table>
        </Column>
      </Grid>
      
      <Grid className="two column">
        <Column>
          <h4>Crime</h4>
          <Table className="very basic">
            <tbody>
              <tr>
               <td>
                Thefts
                </td>
                <td>
                 {532}
                </td>
              </tr>
              <tr>
               <td>
                Assaults
                </td>
                <td>
                 {142}
                </td>
              </tr>
              <tr>
               <td>
                Murders
                </td>
                <td>
                 {23}
                </td>
              </tr>
            </tbody>
          </Table>
        </Column>
        <Column>
          <h4>Economy</h4>
          <Table className="very basic">
            <tbody>
              <tr>
               <td>
                GCP
                </td>
                <td>
                 {Utility.money(20033565)}
                </td>
              </tr>
              <tr>
               <td>
                Income
                </td>
                <td>
                 {1102}
                </td>
              </tr>
              <tr>
               <td>
                Expenses
                </td>
                <td>
                 {562}
                </td>
              </tr>
              <tr>
               <td>
                Profit / day
                </td>
                <td>
                 {500}
                </td>
              </tr>
            </tbody>
          </Table>
        </Column>
      </Grid>
    </Segment>;
  }
});