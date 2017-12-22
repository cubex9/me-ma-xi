/**
 * Created by kubasek on 7/3/2016.
 */
if (!cxn)
    var cxn = {};

cxn.project = function () {
    this._id = null;

    this.name = null;

    this._nodes = null;
    this._links = null;

    this._snap = null;
};

cxn.project.prototype = {

    render: function (snap) {

        this._snap = snap;

        for (var n in this._nodes) {
            this._nodes[n].render(snap, 100 + n * 20, 100 + n * 20);
        }
    }
};

