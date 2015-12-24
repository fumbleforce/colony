Letters = React.createClass({
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
  
  renderLetter (letter) {
    return <tr key={letter._id}>
      <td className="collapsing">
        <Checkbox init={true}>
          <input type="checkbox" />
        </Checkbox>
      </td>
      <td className="collapsing">
        <Icon icon="envelope" size="small" />
      </td>
      <td>
         {letter.title}
      </td>
      <td>
        {letter.sender}
      </td>
      <td>
        {moment(letter.sent).fromNow()}
      </td>
    </tr>
  },
  
  render() {
    let letters = [
      {
        _id: "123123123",
        title: "mytitle",
        sender: "Bob the sender",
        message: "Hello there",
        sent: new Date()
      },
      {
        _id: "123123124",
        title: "mytitle",
        sender: "Bob the sender",
        message: "Hello there",
        sent: new Date()
      },
      {
        _id: "123123125",
        title: "mytitle",
        sender: "Bob the sender",
        message: "Hello there",
        sent: new Date()
      },
      
    ]
    
    return (
      <div>
      
        <Button color="green">
          <i className="icon mail" />
          New letter
        </Button>
        <Button color="red">
          <i className="icon trash" />
          Trash
        </Button>
        <Button>
          <i className="icon mail" />
          Archive
        </Button>
        
        <Table>
          <thead>
            <tr>
              <th></th>
              <th></th>
              <th>Title</th>
              <th>Sender</th>
              <th>Received</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {letters.map((letter) => {
              return this.renderLetter(letter);
            })}
          </tbody>
        </Table>
        
      </div>
    );
  }
});