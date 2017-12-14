function mutateMyStrings(stringOne, stringTwo) {
    let newStr = stringOne;
    let longStr = stringOne + "\n";
    for (let i = 0; i < stringOne.length; i++) {
        if (stringOne.substr(i, 1) !== stringTwo.substr(i, 1)) {
            newStr = newStr.substr(0, i) + stringTwo.substr(i, 1) + stringOne.substr(i + 1);
            longStr += newStr + "\n";
        }
    }
    return longStr;
}