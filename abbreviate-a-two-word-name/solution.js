function abbrevName(name){
    let string = name.toUpperCase().split(" "); //make sure it's uppercase and split on blank space
    return string[0][0]+"."+string[1][0]; // first character of each string
}