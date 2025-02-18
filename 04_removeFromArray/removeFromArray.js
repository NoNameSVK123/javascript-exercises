const removeFromArray = function(array, ...targets) {
    return array.filter(index => !targets.includes(index))
};

// Do not edit below this line
module.exports = removeFromArray;
