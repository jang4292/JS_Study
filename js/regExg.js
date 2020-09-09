function getNumbersFromString(str) {
    var numbers = str.replace(/[^0-9]/g, '');
    return numbers
}