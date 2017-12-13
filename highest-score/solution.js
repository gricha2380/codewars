function high(x){
    x.split(' ') // split on each word
      .sort(function (a,b) {
        getChars(a) < getChars(b)
      })
  }
  // map and reduce?
  
  
  function getChars(word) {
    // within each word map the characters according to the char value
   return [word].map(e=>e.charCodeAt()-96).reduce((acc, cur)=>acc+cur, 0)
  }