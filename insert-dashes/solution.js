function insertDash(num) {
    let holder = num.toString().split("");
    
     for (let i = 0; i < holder.length; i++) {
       if ((holder[i] % 2 === 1) && (holder[i+1] % 2 === 1)) {
         holder.splice(i+1,0,"-");
     }
      }     
    holder = holder.join("");
    return holder;
}