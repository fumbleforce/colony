HighchartConfigs = {
    _configs: {},
    
    get (type) {
        return JSON.parse(JSON.stringify(this._configs[type]));
    }
};