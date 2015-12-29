Letters = React.createClass({
  mixins: [ReactMeteorData],
  
  propTypes: {

  },
  
  getMeteorData() {
    let letters = [];
    
    let letterSub = Meteor.subscribe("letters");
    
    if (letterSub.ready()) {
      letters = Letter.find({}).fetch();
      console.log(letters);
      letters = _.map(letters, (letter) => {
        letter.sender = Meteor.users.findOne(letter.senderId).username;
        return letter;
      });
    }
    
    return {
      letters
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
        {moment(letter.createdAt).fromNow()}
      </td>
    </tr>
  },
  
  render() {
    let letters = this.data.letters;
    
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