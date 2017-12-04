function capitalize(s){
  let even = '', odd = '';
  for (let i = 0;i < s.length; i++) {
    i % 2 === 0 ? even += s[i].toUpperCase() : even +=s[i];
    i % 2 !== 0 ? odd += s[i].toUpperCase() : odd +=s[i];
  }
  return [even, odd];
};