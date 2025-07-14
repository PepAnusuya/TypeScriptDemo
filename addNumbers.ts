function addNumbers(a: number, b: number): number {
    if (typeof a !== 'number' || typeof b !== 'number') {
        throw new Error('Both arguments must be numbers');
    }
    let sum = a + b;
    console.log(sum);
    return sum;
}
addNumbers(5, 10); // Example usage
//export { addNumbers };