//console support if not decleared in some lower versioned browsers
(function() {
    if (!window.console) window.console = {};
    var methods = ["log", "info", "warn", "error", "assert", "dir", "clear", "profile", "profileEnd"];
    for (var i = 0; i < methods.length; i++) {
        var method = methods[i];
        if (!console[method]) console[method] = function() { };
    }
})();

/**
* some basic function for String
*
*/
if (String.prototype.trim) {
    console.info('String.trim() is working with [native code]!');
} else {
    String.prototype.trim = function () {
        return this.replace(/^\s+|\s+$/g, '');
    };
}

if (String.prototype.format) {
    console.warn('String.format() might be working with [native code], please refactor your code!');
} else {
    String.prototype.format = function () {
        var args = arguments;
        return this.replace(/{(\d+)}/g, function (match, number) {
            return typeof args[number] != 'undefined'
                ? args[number]
                : match;
        });
    };
}

if (String.prototype.equals) {
    console.warn('String.equals() might be working with [native code], please refactor your code!');
} else {
    String.prototype.equals = function (str, comparer) {
        if (typeof comparer != 'string' || !str[comparer]) return this == str;
        return this[comparer]() == str[comparer]();
    };
}

if (String.prototype.equalsAny) {
    console.warn('String.equalsAny() might be working with [native code], please refactor your code!');
} else {
    String.prototype.equalsAny = function () {
        var strArray = Array.prototype.slice.call(arguments),
            $this = this.toString();
        for (var i = 0; i < strArray.length; i++) {
            if (($.isArray(strArray[i]) && String.prototype.equalsAny.apply($this, strArray[i])) || strArray[i] == $this) return true;
        }
        return false;
    };
}

if (String.prototype.contains) {
    console.info('String.contains() is working with [native code]!');
} else {
    String.prototype.contains = function (searchString, position) {
        return this.indexOf(searchString, position ? position : 0) >= 0;
    };
}

if (String.prototype.toInt) {
    console.warn('String.toInt() might be working with [native code], please refactor your code!');
} else {
    String.prototype.toInt = function(value, defaultValue) {
        defaultValue = (typeof defaultValue === 'number') ? parseInt(defaultValue) : 0;
        return parseInt(this) || defaultValue;
    };
}

if (String.prototype.toArray) {
    console.warn('String.toArray() might be working with [native code], please refactor your code!');
} else {
    String.prototype.toArray = function (separator, converter) {
        var array = this.split(separator), result = [];
        for (var i = 0; i < array.length; i++) {
            result.push(converter.call(array[i], i, array[i]));
        }
        return result;
    };
}

if (String.prototype.qualified) {
    console.warn('String.qualified() might be working with [native code], please refactor your code!');
} else {
    String.prototype.qualified = function () {
        return this.replace(/\W+/g, '');
    };
}

if (String.prototype.words) {
    console.warn('String.words() might be working with [native code], please refactor your code!');
} else {
    String.prototype.words = function () {
        return this.replace(/([A-Z])/g, " $1").match(/\w+/g);
    };
}

if (String.prototype.toCamelCase) {
    console.warn('String.toCamelCase() might be working with [native code], please refactor your code!');
} else {
    String.prototype.toCamelCase = function () {
        return this.replace(/(?:^|\s)\w/g, function (match) {
            return match.toUpperCase();
        });
    };
}
