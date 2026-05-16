const reverseString = function(string) {
    let reversed = '';
    let length = string.length;
    for (let i = 0; i < length; i++)
        reversed[i] = string[length - i - 1];
    return reversed;
};

// Do not edit below this line
module.exports = reverseString;
