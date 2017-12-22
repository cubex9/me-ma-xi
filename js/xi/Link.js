if (!cxn)
    var cxn = {};

cxn.Link = function () {
    this._parent = null;
    this._id = null;

    this._snap = null;

    this.off = null;
    this.target = null;
    this.tags = null;
}

cxn.Link.prototype = {

    // jmeno
    getOff: function () {
        return this.off;
    },

    // target
    getTarget: function () {
        return this.target;
    }
}
