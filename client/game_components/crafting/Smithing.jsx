Smithing = React.createClass({
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
  
  render() {
    return (
      <div>
      
      <Segment>
        <Grid className="two column">
          <Column>
            <Table>
              <tbody>
                <tr>
                  <td>Mastery</td>
                  <td>34</td>
                </tr>
                <tr>
                  <td>Smiths</td>
                  <td>97</td>
                </tr>
                <tr>
                  <td>Equipment</td>
                  <td>56</td>
                </tr>
                
              </tbody>
            </Table>
          </Column>
          <Column>
            <Grid className="two column">
              <Row>
                  <Column>
                    Quality
                  </Column>
                  <Column>
                    <Progress init={{percent: 69}} className="indicating" />
                  </Column>
              </Row>
              <Row>
                  <Column>
                    Productivity
                  </Column>
                  <Column>
                    <Progress init={{percent: 55}} className="indicating" />
                  </Column>
              </Row>
              <Row>
                  <Column>
                    Quality
                  </Column>
                  <Column>
                    <Progress init={{percent: 22}} className="indicating"/>
                  </Column>
              </Row>
            </Grid>
          </Column>
        </Grid>
      </Segment>
      
      <Form>
        <Fields>
          <Field>
            <label>Quantity</label>
            <Input type="number" />
          </Field>
          <Field>
            <label>Smiths</label>
            <Input type="number" />
          </Field>
          <Field>
            <Button>Produce</Button>
          </Field>
        </Fields>
      </Form>
      
      <Table className="very basic selectable">
        <tbody>
          <tr>
            <td className="collapse">
              <Checkbox init={true}>
                <input type="checkbox" />
              </Checkbox>
            </td>
            <td>
              Sturdy leather shoes
            </td>
            <td>
              <Icon size="small" icon="bar" /> x 3
              <Icon size="small" icon="bar" /> x 3
              <Icon size="small" icon="bar" /> x 3
            </td>
          </tr>
          <tr>
            <td className="collapse">
              <Checkbox init={true}>
                <input type="checkbox" />
              </Checkbox>
            </td>
            <td>
              Sturdy leather shoes
            </td>
            <td>
              <Icon size="small" icon="bar" /> x 3
              <Icon size="small" icon="bar" /> x 3
              <Icon size="small" icon="bar" /> x 3
            </td>
          </tr>
          <tr>
            <td className="collapse">
              <Checkbox init={true}>
                <input type="checkbox" />
              </Checkbox>
            </td>
            <td>
              Sturdy leather shoes
            </td>
            <td>
              <Icon size="small" icon="bar" /> x 3
              <Icon size="small" icon="bar" /> x 3
              <Icon size="small" icon="bar" /> x 3
            </td>
          </tr>
        </tbody>
      </Table>
      
      </div>
    );
  }
});