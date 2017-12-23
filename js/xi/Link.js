if (!cxn)
    var cxn = {};

cxn.Link = function () {
    cxn.Entity.call(this);

    this.off = null;
    this.target = null;
    this.tags = null;
}

cxn.Link.prototype = Object.create(cxn.Entity.prototype);
cxn.Link.prototype.constructor = cxn.Link;

// cxn.Link.prototype.off = function () {
//     return this.off;
// };
//
// cxn.Link.prototype.target = function () {
//     return this.target;
//
// };
