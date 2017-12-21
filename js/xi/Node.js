if (!cxn)
    var cxn = {};

cxn.node = function () {
    this.clazz = null;
    this.net = null;
    this._id = null;
    this.name = null;
    this.tags = null;

    this.snap = null;
}

cxn.node.prototype = {

    // render object on position with size
    render: function (s, x, y) {


        var t = s.text(x + 30, y - 20, this.name);
        t.addClass("node-font");


        var c = s.circle(x, y, 25);

        var c2 = s.circle(x, y, 30);

        c2.attr({
            opacity: 0.4,
            fillOpacity: 0,
            stroke: "green",
            strokeWidth: 10,
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeMiterlimit: 4,
            strokeDasharray: "none",
            strokeDashoffset: 0,
            strokeOpacity: 0.4
        });

        c.attr({
            opacity: 1,
            fill: "#FFFFFF",
            fillOpacity: 0,
            stroke: "#000000",
            strokeWidth: 1,
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeMiterlimit: 4,
            strokeDasharray: "none",
            strokeDashoffset: 0,
            strokeOpacity: 1
        });

        // if (datas.settings[i] != null) {
        //     r.attr({
        //         fill: "#000000",
        //         fillOpacity: 0.3
        //     });
        // }

        c.mouseover(function () {
            this.attr({
                fill: "#000000",
                fillOpacity: 1
            });
        });

        c.mouseout(function () {
            this.attr({
                fill: "#FFFFFF",
                fillOpacity: 0
            });
        });

        this.snap = s.group(c2, c, t);
        this.snap.drag();

    }
}