var Immutable = (function () {
    function Immutable() {
    }
    Immutable.prototype.Freeze = function () {
        return Object.freeze(this);
    };

    Immutable.prototype.Copy = function (obj) {
        var _this = this;
        var objectString = "object";
        var copy;
        var toCopy = obj || {};
        toCopy instanceof Array ? copy = [] : copy = {};
        var keys = Object.keys(toCopy).map(function (x) {
            if (typeof toCopy[x] !== objectString) {
                copy[x] = toCopy[x];
            } else {
                copy[x] = _this.Copy(toCopy[x]);
            }
        });
        return copy;
    };
    return Immutable;
})();
