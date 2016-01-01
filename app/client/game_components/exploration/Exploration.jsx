ExplorationPage = React.createClass({
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
    return <div>
    
      <Grid className="two column">
        <Column>
          <Segment>
            4 000 experience
          </Segment>
        </Column>
        <Column>
          <h2>Quests</h2>
          <Quests>
            <Quest name="Explore outside the gatess" duration={300} reward="poor (0)" />
            <Quest name="Explore outside the gatess" duration={300} reward="poor (0)" />
            <Quest name="Explore outside the gatess" duration={300} reward="poor (0)" />
            <Quest name="Explore outside the gatess" duration={300} reward="poor (0)" />
            <Quest name="Explore outside the gatess" duration={300} reward="poor (0)" />
          </Quests>
        </Column>
      </Grid>
      
      <h2>Parties</h2>
      <Parties>
        <Party explorers={10} equipment={{ "weapons": "musket", "armor": "steel", "U": "U", "rations": "rations" }} />
        <Party explorers={20} equipment={{ "weapons": "musket", "armor": "steel", "U": "U", "rations": "rations" }} />
        <Party explorers={3} equipment={{ "weapons": "gun", "armor": "cloth", "U": "U", "rations": "rations" }} />
      </Parties>
      
      
    </div>;
  }
});