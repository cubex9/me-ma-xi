if (!cxn)
    var cxn = {};

cxn.link = function () {
    this._parent = null;
    this._id = null;

    this._snap = null;

    this.off = null;
    this.target = null;
    this.tags = null;
}

cxn.link.prototype = {

    // jmeno
    getOff: function () {
        return this.off;
    },

    // target
    getTarget: function () {
        return this.target;
    }
}
