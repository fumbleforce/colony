Population = React.createClass({
  mixins: [ReactMeteorData],
  
  getMeteorData() {
    return {
      town: Town.get()
    }
  },
  
  render() {
    let town = this.data.town;
    
    let statuses = _.map(town.populationStatus, (value, name) => {
      return { name, value };
    });
    
    let professions = [
      {
        name: "Explorers",
        number: 9
      },
      {
        name: "Milita",
        number: 200
      },
      {
        name: "Crafters",
        number: 45
      },
      {
        name: "Traders",
        number: 16
      },
      {
        name: "Laborers",
        number: 300
      },
    ]
    
    return <Segment className="secondary">
      
      <Segment>
        <h2 className="ui header">Status</h2>
      
        <Table className="very basic">
          <tbody>
            {statuses.map((status) => {
              return <tr key={status.name}>
              <td className="collapsing">
                {U.labelify(status.name)}
              </td>
              <td>
                <Progress init={{percent: status.value}} className="indicating" />
              </td>
            </tr>
            })}
          </tbody>
        </Table>
      </Segment>
      
      <Grid className="two column">
        <Column>
          <h4>Professions</h4>
          <Table className="very basic">
            <tbody>
              {professions.map((profession) => {
                return <tr key={profession.name}>
                <td className="collapsing">
                  {U.labelify(profession.name)}
                </td>
                <td>
                  {U.number(profession.number)}
                </td>
              </tr>
              })}
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
                 {U.money(20033565)}
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