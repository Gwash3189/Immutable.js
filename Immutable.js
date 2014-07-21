var Immutable = (function () {
    function Immutable() {
    }
    Immutable.prototype.Freeze = function () {
        return Object.freeze(this);
    };

    Immutable.prototype.copy = function (obj) {
        var objectString = "object";
        var copy;
        var toCopy = obj || toCopy;
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
                copy[keys[i]] = this.copy(toCopy[keys[i]]);
            }
        }
        return copy;
    };

    Immutable.prototype.Copy = function () {
        return this.copy(this);
        ;
    };
    return Immutable;
})();
