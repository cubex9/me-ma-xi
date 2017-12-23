if (!cxn)
    var cxn = {};

cxn.Tag = function () {
    cxn.Entity.call(this);

    this.name = null;
}

cxn.Tag.prototype = Object.create(cxn.Entity.prototype);
cxn.Tag.prototype.constructor = cxn.Tag;

// cxn.Tag.prototype.name = function () {
//         return this.name;
// };