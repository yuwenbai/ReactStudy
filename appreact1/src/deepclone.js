function deepClone(obj) {
    var _toString = Object.prototype.toString;
    
        // null, undefined, non-object, function
        if (!obj || typeof obj !== 'object') {
            return obj;
            console.log("null, undefined, non-object, function");
        }
    
        // DOM Node
        if (obj.nodeType && 'cloneNode' in obj) {
            return obj.cloneNode(true);
            console.log("DOM Node");
        }
    
        // Date
        if (_toString.call(obj) === '[object Date]') {
            return new Date(obj.getTime());
            console.log("Date");
        }
    
        // RegExp
        if (_toString.call(obj) === '[object RegExp]') {
            var flags = [];
            if (obj.global) { flags.push('g'); }
            if (obj.multiline) { flags.push('m'); }
            if (obj.ignoreCase) { flags.push('i'); }
            // console.log("RegExp");
            return new RegExp(obj.source, flags.join(''));
    
        }
    
        var result = Array.isArray(obj) ? [] : {};
        // console.log(result);
    
        for (var key in obj) {
            result[key] = deepClone(obj[key]);
    
        }
    
        return result;
    }
export default deepClone