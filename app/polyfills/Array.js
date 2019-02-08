if (!Array.isArray) {
	Array.isArray = function(arg) {
		return Object.prototype.toString.call(arg) === '[object Array]';
	};
}

if (!Array.prototype.forEach) {
	Array.prototype.forEach = function forEach (callback, thisArg) {
		if (typeof callback !== 'function') {
			throw new TypeError(callback + ' is not a function');
		}
		var array = this;
		thisArg = thisArg || this;
		for (var i = 0, l = array.length; i !== l; ++i) {
			callback.call(thisArg, array[i], i, array);
		}
	};
}