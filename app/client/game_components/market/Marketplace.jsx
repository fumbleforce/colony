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
    let categories = [
      {
        name: "Weapons",
        value: "weapons",
      },
      {
        name: "Armor",
        value: "armor",
      },
      {
        name: "Food",
        value: "food",
      },
      
    ];
  
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
              <Dropdown name="category" className="selection" default="Choose category" init={true} options={categories} />
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
                    {U.money(5000)}
                  </td>
                  <td>
                    {U.money(300)}
                  </td>
                  <td>
                    {U.number(20)}
                  </td>
                  <td>
                    {U.number(0)}
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
                    {U.money(5000)}
                  </td>
                  <td>
                    {U.money(3200)}
                  </td>
                  <td>
                    {U.number(230)}
                  </td>
                  <td>
                    {U.number(0)}
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
                    {U.money(5000)}
                  </td>
                  <td>
                    {U.money(4500)}
                  </td>
                  <td>
                    {U.number(3)}
                  </td>
                  <td>
                    {U.number(0)}
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