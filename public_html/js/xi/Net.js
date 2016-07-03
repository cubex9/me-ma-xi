/**
 * Created by kubasek on 7/3/2016.
 */
if (!cxn)
    var cxn = {};

cxn.Net = function () {
    this.name = null;
    this.entities = new Array();
};

cxn.Net.prototype = {
    // nacte sam sebe ze zdroje
    parse: function (data) {
        var o = JSON.parse(data);
        this.name = o.name;
        for (var x in o.entities) {
            var e = o.entities[x];
            if (e.clazz == 'Node') {
                this.entities[e.id] = new Node(e);
            } else if (e.clazz = 'Link') {
                this.entities[e.id] = new Link(e);
            } else if (e.clazz = 'Tag') {
                this.entities[e.id] = new Tag(e);
            }
        }
        return this;
    },
    // vlozi nebo prepise objekt
    put: function (o) {
        this.elements[o.getId()] = o;
    },

    // get by id
    get: function (id) {
        return this.elements[id];
    }
};

var net = null;