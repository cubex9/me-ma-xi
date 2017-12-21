/**
 * Created by kubasek on 7/3/2016.
 */
if (!cxn)
    var cxn = {};

cxn.Net = function () {
    this.name = null;
    this.nodes = null;
    this.snap = null;
};

cxn.Net.prototype = {

    render: function (snap) {

        this.snap = snap;

        for (var n in this.nodes) {
            this.nodes[n].render(snap, 100 + n * 20, 100 + n * 20);
        }
    }
};

