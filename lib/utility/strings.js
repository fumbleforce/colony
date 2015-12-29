
U.asArray = function (obj) {
    return _.map(obj, (value, key) => {
        value.id = key;
        return value;
    });
};

U.labelify = function (str) {
    if (str === undefined) return "[undefined]";
    var parts = str.replace(/([a-z])([A-Z])/g, '$1 $2').replace(":", ": ");
    return parts[0].toUpperCase() + parts.slice(1);
};


U.capitalizeFirstLetter = function (s) {
    return s.charAt(0).toUpperCase() + this.slice(1);
};


// -------------------------------------
// Math
// -------------------------------------

U.clamp = function (val, min, max) {
    return Math.max(Math.min(val, max), min);
};


// -------------------------------------
// Other
// -------------------------------------


U.randomId = function (length, opts) {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    opts = opts || {};
    length = length || 10;
    
    var lowerCase = opts.lowerCase || false;

    for (var i = 0; i < length; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    
    if (lowerCase) {
        text = text.toLowerCase();
    }
    
    return text;
};
