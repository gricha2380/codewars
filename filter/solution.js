function filter_list(l) {
    return l.filter(item => Number.isInteger(item) && item>=0);
}