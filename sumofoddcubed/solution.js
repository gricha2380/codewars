function cubeOdd(arr) {
    if (arr.some(i => isNaN(i))) return undefined;
    return arr.filter(e => e%2 !== 0).map(e => Math.pow(e, 3)).reduce((prev, curr) => prev + curr, 0);
}