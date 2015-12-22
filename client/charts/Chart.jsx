
Chart = React.createClass({
  propTypes: {
    config: React.PropTypes.object.isRequired,
    isPureConfig: React.PropTypes.bool
  },

  renderChart (config) {
    let chartType = this.props.type;
    
    if (!chartType) {
      throw new Error("Chart component must have a 'type' property");
    }
    
    if (!config) {
      throw new Error('Config must be specified for the ' + chartType + ' component');
    }
    
    console.log("before", HighchartConfigs.get(chartType));
    let normalConfigs = HighchartConfigs.get(chartType);
    let extendedConfig = _.extend(normalConfigs, config);
    console.log("extended", extendedConfig);
    
    let chartConfig = extendedConfig.chart;
    console.log({
      ...extendedConfig,
      chart: {
        ...chartConfig,
        renderTo: this.refs.chart
      }
    });
    this.chart = new Highcharts.Chart({
      ...extendedConfig,
      chart: {
        ...chartConfig,
        renderTo: this.refs.chart
      }
    });
  },

  shouldComponentUpdate(nextProps) {
    if (!this.props.isPureConfig || !(this.props.config === nextProps.config)) {
      this.renderChart(nextProps.config);
    }
    return true;
  },

  getChart () {
    if (!this.chart) {
      throw new Error('getChart() should not be called before the component is mounted');
    }
    return this.chart;
  },

  componentDidMount () {
    this.renderChart(this.props.config);
  },

  render () {
    let props = this.props;
    props = {
      ...props,
      ref: 'chart'
    };
    return <div {...props} />;
  }
});
