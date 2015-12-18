Marketplace = React.createClass({
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
    return <div id="marketplace" {...this.props}>
      <Grid>
        <Column className="three wide">
          <div className="ui vertical fluid menu">
            
            <h2 className="ui header">Filter</h2>
            
            <Item>
              <label>Name</label>
              <Input type="text" placeholder="Item name" />
            </Item>
            <Item>
              <label>Price</label>
                  <Input type="number" placeholder="$ from" />
                  <Input type="number" placeholder="$ to" />
            </Item>
            <Item>
              <label>Category</label>
              <Dropdown name="category" className="selection" default="Choose category" init={true}>
                <Item>
                  No category
                </Item>
                <Item data-value="weapons">
                  Weapons
                </Item>
                <Item data-value="armor">
                  Armor
                </Item>
              </Dropdown>
            </Item>
          </div>
        </Column>
        <Column className="thirteen wide">
          <Segment>
            <h3 className="ui header">Sell orders</h3>
            <table className="ui very basic table">
              <thead>
                <tr>
                  <th></th>
                  <th>
                    Item
                  </th>
                  <th>
                    Sell Price
                  </th>
                  <th>
                    Buy Price
                  </th>
                  <th>
                    In Stock
                  </th>
                  <th>
                    Inventory
                  </th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <Icon size="small" icon="" />
                  </td>
                  <td>
                    Sword
                  </td>
                  <td>
                    {Utility.money(5000)}
                  </td>
                  <td>
                    {Utility.money(300)}
                  </td>
                  <td>
                    {Utility.number(20)}
                  </td>
                  <td>
                    {Utility.number(0)}
                  </td>
                  <td>
                    <Button>Buy</Button>
                    <Button>Sell</Button>
                  </td>
                </tr>
                <tr>
                  <td>
                    <Icon size="small" icon="" />
                  </td>
                  <td>
                    Shield
                  </td>
                  <td>
                    {Utility.money(5000)}
                  </td>
                  <td>
                    {Utility.money(3200)}
                  </td>
                  <td>
                    {Utility.number(230)}
                  </td>
                  <td>
                    {Utility.number(0)}
                  </td>
                  <td>
                    <Button>Buy</Button>
                    <Button>Sell</Button>
                  </td>
                </tr>
                <tr>
                  <td>
                    <Icon size="small" icon="" />
                  </td>
                  <td>
                    Gun
                  </td>
                  <td>
                    {Utility.money(5000)}
                  </td>
                  <td>
                    {Utility.money(4500)}
                  </td>
                  <td>
                    {Utility.number(3)}
                  </td>
                  <td>
                    {Utility.number(0)}
                  </td>
                  <td>
                    <Button>Buy</Button>
                    <Button>Sell</Button>
                  </td>
                </tr>
              </tbody>
            </table>
          </Segment>
        </Column>
      </Grid>
    </div>;
  }
});