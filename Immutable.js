var Immutable = (function () {
    
    function privateCopy(obj) {
        var objectString = "object";
        var copy;
        var toCopy = obj || this;
        if (toCopy instanceof Array) {
            copy = [];
        } else {
            copy = {};
        }
        var keys = Object.keys(toCopy);
        for (var i = 0; i < keys.length; i++) {
            if (typeof toCopy[keys[i]] !== objectString) {
                copy[keys[i]] = toCopy[keys[i]];
            } else {
                copy[keys[i]] = privateCopy(toCopy[keys[i]]);
            }
        }
        return copy;
    }
    
    function Immutable() {}
    
    Immutable.prototype.Freeze = function () {
        return Object.freeze(this);
    };
    
    Immutable.prototype.Copy = function () {
        return privateCopy.call(this,this);
    };
    
    return Immutable;
})();

var namespace = this.window === undefined ?
    (this.module !== undefined && this.module.exports !== undefined ? 
        module.exports : 
        undefined) :
    window
namespace.Immutable = Immutable;
    
