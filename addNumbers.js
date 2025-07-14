function addNumbers(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
        throw new Error('Both arguments must be numbers');
    }
    var sum = a + b;
    console.log(sum);
    return sum;
}
addNumbers(5, 10); // Example usage
//export { addNumbers };
