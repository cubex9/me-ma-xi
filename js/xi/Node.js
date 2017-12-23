if (!cxn)
    var cxn = {};

cxn.Node = function () {
    cxn.Entity.call(this);

    this.name = null;
    this.tags = null;


    this._links = new Array();
};

cxn.Node.prototype = Object.create(cxn.Entity.prototype);
cxn.Node.prototype.constructor = cxn.Node;

cxn.Node.prototype.link = function (l) {
    this.links.push(l);
};

// render object on position with size, return snap object ( or group )
cxn.Node.prototype.render = function (s, x, y) {

    /* name of node */
    var t = s.text(x + 30, y - 20, this.name);
    t.addClass("node-font");

    /* inner circle, dragable */
    var c = s.circle(x, y, 25);

    /* out circle with collor */
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


    var snapi = this._snap = s.group(c2, c, t);

    c.drag((x, y) => {
        this._snap.transform(new Snap.Matrix().translate(x, y));
    })

    //this._snap = s.group(c2, c, t);
    //this._snap.drag();

    return this._snap;
};
