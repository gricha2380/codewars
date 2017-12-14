function high(x){
    if (x.length<1) return ''; // return blank string if empty
    let arr = x.split(' '); //make array of words
    let hiScore = 0, topWord = '';
     
    for (let i = 0; i < arr.length; i++) {
        // check each char, return char code #, find word sum
        let score = arr[i]
          .split('')
              .map((e) => { return e.charCodeAt(0) - 96})
                      .reduce((acc, cur) => acc + cur, 0);
       
      if (score > hiScore) {
        // check word sum against hiScore value
        hiScore = score;
        topWord = arr[i];
      }
    }
    return topWord; // return largest after loop
  }