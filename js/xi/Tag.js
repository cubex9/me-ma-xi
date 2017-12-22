if (!cxn)
    var cxn = {};

cxn.Tag = function () {
    this._parent = null;
    this._id = null;
    this._snap = null;

    this.name = null;
}

cxn.Tag.prototype = {

    getId: function () {
        return this._id;
    },
    // jmeno
    getName: function () {
        return this.name;

    }
}