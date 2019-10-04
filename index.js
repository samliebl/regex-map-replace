function regexMapReplace(str, map) {
	if (typeof(str) != String) {
		throw new Error('Recieved non-string data type for first parameter/str. The first parameter/str needs to be a string.');
	} else if (typeof(map) != Array) {
		throw new Error('Recieved non-string data type for second parameter/map. The second parameter/map needs to be an array.');
	}
    map.forEach(function(err, regexItem) {
        str = str.replace(map[regexItem].match, map[regexItem].replace);
	});
  	return str;
}

module.exports = regexMapReplace;