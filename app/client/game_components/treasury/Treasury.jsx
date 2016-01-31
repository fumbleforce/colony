TreasuryPage = React.createClass({
  mixins: [ReactMeteorData],
  
  getMeteorData() {
    let incomeData = [];
    let expenseData = [];
    let diffToday = 0;
    let totalIncomeToday = 0;
    let totalExpensesToday = 0;
    let totalExpensesWeek = 0;
    let totalIncomeWeek = 0;
    
    const transactionSub = Meteor.subscribe("transactions");
    const dataReady = transactionSub.ready();
    const incomeFields = Gamedata.accounting.incomeFields;
    const expenseFields = Gamedata.accounting.expenseFields;
    
    const settlement = Settlement.get();
    
    if (dataReady) {
      let today;
      let week;
      let month;
      
      let todayStart = moment().startOf('day').toDate();
      let todayEnd = moment().endOf('day').toDate();
      let weekStart = moment().subtract(7, "days").startOf('day').toDate();
      let weekEnd = moment().endOf('day').toDate();
      let monthStart = moment().subtract(30, "days").startOf('day').toDate();
      let monthEnd = moment().endOf('day').toDate();
      
      let sumTransactions = (mem, t) => mem + t.value;
      let sum = (mem, x) => mem + x;
      
      incomeData = _.map(incomeFields, field => {
        today = Transaction.find({
          field,
          value: { $gt: 0 },
          createdAt: {
            $gte: todayStart,
            $lt: todayEnd
          }
        }).fetch();
        
        week = Transaction.find({
          field,
          value: { $gt: 0 },
          createdAt: {
            $gte: weekStart,
            $lt: weekEnd
          }
        }).fetch();
        
        month = Transaction.find({
          field,
          value: { $gt: 0 },
          createdAt: {
            $gte: monthStart,
            $lt: monthEnd
          }
        }).fetch();
        
        return {
          field,
          today: _.reduce(today, sumTransactions, 0),
          week: _.reduce(week, sumTransactions, 0),
          month: _.reduce(month, sumTransactions, 0),
        };
      });
      
      incomeData.push({
        field: "Total",
        today: _.reduce(incomeData, (m, f) => m + f.today, 0),
        week: _.reduce(incomeData, (m, f) => m + f.week, 0),
        month: _.reduce(incomeData, (m, f) => m + f.month, 0),
      });
      
      expenseData = _.map(expenseFields, field => {
        today = Transaction.find({
          field,
          value: { $lt: 0 },
          createdAt: {
            $gte: todayStart,
            $lt: todayEnd
          }
        }).fetch();
        week = Transaction.find({
          field,
          value: { $lt: 0 },
          createdAt: {
            $gte: weekStart,
            $lt: weekEnd
          }
        }).fetch();
        month = Transaction.find({
          field,
          value: { $lt: 0 },
          createdAt: {
            $gte: monthStart,
            $lt: monthEnd
          }
        }).fetch();
        
        return {
          field,
          today: _.reduce(today, sumTransactions, 0),
          week: _.reduce(week, sumTransactions, 0),
          month: _.reduce(month, sumTransactions, 0),
        };
      });
      
      expenseData.push({
        field: "Total",
        today: _.reduce(expenseData, (m, f) => m + f.today, 0),
        week: _.reduce(expenseData, (m, f) => m + f.week, 0),
        month: _.reduce(expenseData, (m, f) => m + f.month, 0),
      });
      
      
      totalIncomeToday = _.last(incomeData).today;
      totalExpensesToday =  _.last(expenseData).today;
      totalIncomeWeek = _.last(incomeData).week;
      totalExpensesWeek =  _.last(expenseData).week;
      
      diffToday =  totalIncomeToday + totalExpensesToday;
    }
    
    return {
      dataReady,
      incomeData,
      expenseData,
      totalExpensesToday,
      totalIncomeToday,
      totalExpensesWeek,
      totalIncomeWeek,
      diffToday,
      cash: settlement.cash,
    }
  },
  
  render() {
    const {
      diffToday,
      dataReady,
      incomeData,
      expenseData,
      totalExpensesToday,
      totalIncomeToday,
      totalIncomeWeek,
      totalExpensesWeek,
      cash,
    } = this.data;
    
    let cashChartConfig = {
      series: [
        {
          name: "Cash",
          data: [100, 234, 310, 30, 312, 120, 200, 300]
        }
      ]
    };
    
    let sparklineConfig = {
      chart: {
        height: 100
      },
      series: [
        {
          color: "#fff",
          name: "Cash",
          data: [100, 234, 310, 30, 312, 120, 200, 300]
        }
      ]
    };
    
    return <div>
    
      <Grid className="two column">
        <Row>
          <Column>
            <Segment className="inverted green">
              <Grid className="two column">
                <Column>
                  <h2 className="ui inverted header center aligned">
                    Cash: {U.money(cash)}
                    <div className="sub header">
                      {U.money(diffToday)} / day
                    </div>
                  </h2>
                </Column>
                <Column>
                  <Chart type="sparkline" config={sparklineConfig} />
                </Column>
              </Grid>
            </Segment>
            
            <Segment className="inverted green">
              <Grid className="two column">
                <Column>
                  <h2 className="ui inverted header center aligned">
                    Income: {U.money(totalIncomeToday)}
                    <div className="sub header">
                      {U.money(totalIncomeToday - (totalIncomeWeek / 7))} compared to week avg.
                    </div>
                  </h2>
                </Column>
                <Column>
                  <Chart type="sparkline" config={sparklineConfig} />
                </Column>
              </Grid>
            </Segment>
            
            <Segment className="inverted red">
              <Grid className="two column">
                <Column>
                  <h2 className="ui inverted header center aligned">
                    Expenses: {U.money(totalExpensesToday)}
                    <div className="sub header">
                      {U.money(totalExpensesToday - (totalExpensesWeek / 7))} compared to week avg.
                    </div>
                  </h2>
                </Column>
                <Column>
                  <Chart type="sparkline" config={sparklineConfig} />
                </Column>
              </Grid>
            </Segment>
            
          </Column>
          <Column>
            <Segment>
              <Chart type="line" config={cashChartConfig} />
            </Segment>
          </Column>
        </Row>
        
        <Row>      
          <Column>
            <Segment>
              <h2 className="center aligned">Income</h2>
              
              <Table className="very basic">
                <thead>
                  <tr>
                    <th></th>
                    <th>Today</th>
                    <th>This Week</th>
                    <th>This month</th>
                  </tr>
                </thead>
                <tbody>
                  {incomeData.map((d, i) => {
                    return <tr key={i}>
                      <td>
                        {U.labelify(d.field)}
                      </td>
                      <td>
                        {U.money(d.today)}
                      </td>
                      <td>
                        {U.money(d.week)}
                      </td>
                      <td>
                        {U.money(d.month)}
                      </td>
                    </tr>
                  })}
                </tbody>
              </Table>
            </Segment>
          </Column>
          <Column>
            <Segment className="secondary">
              <h2 className="center aligned">Expenses</h2>
              <Table className="very basic">
                <thead>
                  <tr>
                    <th></th>
                    <th>Today</th>
                    <th>This Week</th>
                    <th>This month</th>
                  </tr>
                </thead>
                <tbody>
                  {expenseData.map((d, i) => {
                    return <tr key={i}>
                      <td>
                        {U.labelify(d.field)}
                      </td>
                      <td>
                        {U.money(d.today)}
                      </td>
                      <td>
                        {U.money(d.week)}
                      </td>
                      <td>
                        {U.money(d.month)}
                      </td>
                    </tr>
                  })}
                </tbody>
              </Table>
            </Segment>
          </Column>
        </Row>
      </Grid>
    </div>;
  }
});