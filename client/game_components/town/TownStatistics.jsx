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
    return <Segment className="basic">
      
      <Grid className="two column">
        <Column>
          <Segment>
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
        </Segment>
        </Column>
        <Column>
          <Segment>
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
        </Segment>
        </Column>
      </Grid>
      
      <Grid className="two column">
        <Column>
          <Segment>
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
        </Segment>
        </Column>
      </Grid>
    </Segment>;
  }
});