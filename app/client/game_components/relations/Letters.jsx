Letters = React.createClass({
  mixins: [ReactMeteorData],
  
  propTypes: {

  },
  
  getMeteorData() {
    let letters = [];
    
    let letterSub = Meteor.subscribe("letters");
    
    if (letterSub.ready()) {
      letters = Letter.find({ archived: false }).fetch();
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
      newLetter: false,
      selectedLetters: []
    }
  },
  
  trashSelected () {
    _.each(this.state.selectedLetters, (letterId) => {
      Letter.remove(letterId);
    });
  },
  
  archiveSelected () {
    _.each(this.state.selectedLetters, (letterId) => {
      Letter.update({
        _id: letterId
      }, {
        $set: {
          archived: true
        }
      });
    });
  },
  
  toggleNewLetter () {
    this.setState({ newLetter: !this.state.newLetter });
  },
  
  handleSelected (letter) {
    if (_.contains(this.state.selectedLetters, letter._id)) {
      // Remove letterId from list of selected letters
      this.setState({ selectedLetters: _.reject(this.state.selectedLetters, (lid) => {
        return letter._id === lid;
      })});
    } else {
      let selectedLetters = this.state.selectedLetters;
      selectedLetters.push(letter._id);
      this.setState({ selectedLetters });
    }
  },
  
  renderInbox () {
    let letters = this.data.letters;
    
    return <div>
      <Button id="new-letter" color="green" onClick={this.toggleNewLetter}>
        <i className="icon mail" />
        New letter
      </Button>
      <Button
        id="trash-letter"
        onClick={this.trashSelected}
        color="red"
        disabled={!this.state.selectedLetters.length}>
        <i className="icon trash" />
        Trash
      </Button>
      <Button
        id="archive-letter"
        disabled={!this.state.selectedLetters.length}
        onClick={this.archiveSelected}>
        <i className="icon mail" />
        
        Archive
      </Button>
      
      <Table className="selectable">
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
            return <LetterItem key={letter._id} onSelected={this.handleSelected} letter={letter} />
          })}
        </tbody>
      </Table>
    </div>
  },
  
  renderNewLetter () {
    return <div>
      <Button onClick={this.toggleNewLetter}>
        <i className="icon arrow left" />
        Back to inbox
      </Button>
      <NewLetter done={this.toggleNewLetter} />
    </div>
  },
  
  render() {
    return this.state.newLetter ? this.renderNewLetter() : this.renderInbox();
  }
});


LetterItem = React.createClass({
  
  getInitialState() {
    return {
      selected: false
    }
  },
  
  setSelected () {
    this.setState({ selected: !this.state.selected });
    this.props.onSelected(this.props.letter);
  },
  
  render() {
    let {
      letter,
      ...others
    } = this.props;
    
    let selected = this.state.selected ? "active" : "";
    let classes = selected +=" letter-item"
    
    return (
      <tr
        {...others}
        className={classes}
        onClick={this.setSelected}>
        
        <td className="collapsing">
          <Checkbox init={!!selected}>
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
          {letter.getSender()}
        </td>
        <td>
          {letter.sentTimeAgo()}
        </td>
      </tr>
    );
  }
});