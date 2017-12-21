if (!cxn)
    var cxn = {};


cxn.Mapper = function () {

}

cxn.Mapper.prototype = {
    parse: function (parent, data) {

        /* pro pole vytvorime array, jinak ziskame object */
        if (data instanceof Array) {
            var d = new Array();
        } else {

            // create object by clazz
            var d = eval(`new cxn.${data.clazz}()`);

            // set parent
            d.parent = parent;
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
    }
}

var mapper = new cxn.Mapper();
