if (!cxn)
    var cxn = {};

cxn.Entity = function () {
    this._id = null;
    this._parent = null;
    this._snap = null;
}

cxn.Entity.prototype = {

    id: function () {
        return this._id;
    },

    parent: function () {
        return this._parent;
    }
}

