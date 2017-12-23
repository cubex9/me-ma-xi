/**
 * Created by kubasek on 7/3/2016.
 */
if (!cxn)
    var cxn = {};

cxn.Project = function () {
    cxn.Entity.call(this);

    this.name = null;

    this._nodes = null;
    this._links = null;
};

cxn.Project.prototype = Object.create(cxn.Entity.prototype);
cxn.Project.prototype.constructor = cxn.Project;

cxn.Project.prototype.render = function (snap) {

    this._snap = snap;

    for (var n in this._nodes) {
        this._nodes[n].render(snap, 100 + n * 20, 100 + n * 20);
    }
};

