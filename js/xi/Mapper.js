if (!cxn)
    var cxn = {};


cxn.Mapper.prototype = {
    parse: function (parent, data) {

        // create object by clazz
        var d = eval(`new cxn.${data.clazz}()`)
        // set parent
        d.parent = parent;

        // put all fieds
        for (var t in data) {

            // only base types can put without mapper, object must be convert
            if (typeOf(data[t]) === 'object') {
                d[t] = this.parse(d, data[t])
            } else {
                d[t] = data[t];
            }
        }
        return d;
    }
}
