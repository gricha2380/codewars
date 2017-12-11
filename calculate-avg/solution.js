function find_average(array) {
    let reducer = (acc, cur) => acc + cur; 
    return array.reduce(reducer)/array.length;
}