window._ = {};
_.isObject = function(obj) {
  var type = typeof obj;
  return type === 'function' || type === 'object' && !!obj;
};
_.extend = function(obj) {
  if (!_.isObject(obj)) return obj;
  var source, prop;
  for (var i = 1, length = arguments.length; i < length; i++) {
    source = arguments[i];
    for (prop in source) {
      if (hasOwnProperty.call(source, prop)) {
          obj[prop] = source[prop];
      }
    }
  }
  return obj;
};
