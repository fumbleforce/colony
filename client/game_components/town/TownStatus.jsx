TownStatus = React.createClass({
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
    return <Segment className="">
      
      <h2 className="ui header">Status</h2>
    
      <Table className="very basic">
        <tbody>
          <tr>
            <td className="collapsing">
              Happiness
            </td>
            <td>
              <Progress init={{percent: 22}} className="indicating" />
            </td>
          </tr>
          <tr>
            <td className="collapsing">
              Health
            </td>
            <td>
              <Progress init={{percent: 22}} className="indicating" />
            </td>
          </tr>
          <tr>
            <td className="collapsing">
              Hunger
            </td>
            <td>
              <Progress init={{percent: 22}} className="indicating" />
            </td>
          </tr>
          <tr>
            <td className="collapsing">
              Loyalty
            </td>
            <td>
              <Progress init={{percent: 22}} className="indicating" />
            </td>
          </tr>
          <tr>
            <td className="collapsing">
              Equality
            </td>
            <td>
              <Progress init={{percent: 22}} className="indicating" />
            </td>
          </tr>
          <tr>
            <td className="collapsing">
              Prosperity
            </td>
            <td>
              <Progress init={{percent: 22}} className="indicating" />
            </td>
          </tr>
        </tbody>
      </Table>
    </Segment>;
  }
});