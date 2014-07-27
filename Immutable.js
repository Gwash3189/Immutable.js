var Immutable = (function () {
    
    function _extend(source, obj) {
        Object.keys(obj).forEach(function(value) {
            source[value] = obj[value];
        });
        return source;
    }
    
    function _copy(obj) {
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
                copy[keys[i]] = _copy(toCopy[keys[i]]);
            }
        }
        return copy;
    }
    
    function Immutable(propsObj) {
        if(propsObj){
            return _extend(this,propsObj);    
        }
    }
    
    Immutable.prototype.Freeze = function () {
        return Object.freeze(this);
    };
    
    Immutable.prototype.Copy = function () {
        return _copy.call(this,this);
    };
    
    return Immutable;
})();

var namespace = this.window === undefined ?
    (this.module !== undefined && this.module.exports !== undefined ? 
        module.exports : 
        undefined) :
    window
namespace.Immutable = Immutable;
    
