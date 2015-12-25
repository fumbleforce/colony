Newsboard = React.createClass({
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
        <Segment className="piled">
            
            <Grid className="">
                <Column className="three wide">
                    <Menu className="vertical fluid">
                        <Item>
                            <Button className="fluid green">New post</Button>
                        </Item>
                        
                        <Item>
                            <div className="header">Sort</div>
                            
                            <div className="menu">
                                <Item type="link">
                                    By date
                                </Item>
                                <Item type="link">
                                    Alphabetical
                                </Item>
                                
                            </div>
                        </Item>
                        <Item>
                            <div className="header">Page</div>

                            <div className="menu">
                                <Item type="link">
                                    National
                                </Item>
                                <Item type="link">
                                    Sports
                                </Item>
                            </div>
                        </Item>
                    </Menu>
                </Column>
                <Column className="thirteen wide">
                    <h1>Newsboard</h1>
                    <Table>
                        <tbody>
                            <tr>
                                <td>WTS Thingy for 200 gp</td>
                                <td>Jimmy</td>
                                <td>2h ago</td>
                            </tr>
                            <tr>
                                <td>WTS Thingy for 200 gp</td>
                                <td>Jimmy</td>
                                <td>2h ago</td>
                            </tr>
                            <tr>
                                <td>WTS Thingy for 200 gp</td>
                                <td>Jimmy</td>
                                <td>2h ago</td>
                            </tr>
                            
                        </tbody>
                    </Table>
                </Column>
            </Grid>
        </Segment>
        
      </div>
    );
  }
});