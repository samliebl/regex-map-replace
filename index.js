function regexMapReplace(str, map) {
    map.forEach(function(err, regexItem) {
        str = str.replace(map[regexItem].match, map[regexItem].replace);
    });
    return str;
}

module.exports = regexMapReplace;