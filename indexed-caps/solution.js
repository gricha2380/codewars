function capitalize(s,arr){
  arr.forEach(function(x) {
    if (x<=s.length) s = s.substr(0,x) + s[x].toUpperCase() + s.substr(x+1)
  });
  return s;
};