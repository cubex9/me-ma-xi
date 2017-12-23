if (!cxn)
    var cxn = {};


cxn.Mapper = function () {

    this.subtypes = [
        {value: 'cxn.Entity', clazz: "entity"},
        {value: 'cxn.Project', clazz: "project"},
        {value: 'cxn.Node', clazz: "node"},
        {value: 'cxn.Link', clazz: "link"},
        {value: 'cxn.Tag', clazz: "tag"}
    ]
}

cxn.Mapper.prototype = {

    /* get subtipe from clazz definition */
    subtype: function (clazz) {
        return this.subtypes.find(e => e.clazz == clazz).value;
    },

    /**
     * wearing pure json data to pre-defined classes by clazz property
     *
     * @param parent
     * @param data
     * @returns {any[] | any}
     */
    parse: function (parent, data) {

        /* pro pole vytvorime array, jinak ziskame object */
        if (data instanceof Array) {
            var d = new Array();
        } else {

            // create object by clazz
            var d = eval(`new ${ this.subtype(data.clazz)}()`);

            // set parent
            d._parent = parent;
        }

        // put all fieds
        for (var t in data) {

            if (data[t] != null) {

                // only base types can put without mapper, object must be convert
                if (typeof(data[t]) === 'object') {
                    d[t] = this.parse(d, data[t])
                } else {
                    d[t] = data[t];
                }
            }
        }

        return d;
    },

    /**
     * remove all inner variables which have underscore in start of key name, except _id
     *
     * @param parent
     */
    serialize2json: function (o) {
        return JSON.stringify(o, (key, val) => /_.*/.test(key) ? null : val)
    }
}

var mapper = new cxn.Mapper();
