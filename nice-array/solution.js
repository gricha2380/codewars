function isNice(arr){  
if (arr.length === 0) { return false;} // instructions ask to return false on an empty array
  for (let i=0;i < arr.length; i++) {
    if (arr.indexOf(arr[i]+1) === -1 && arr.indexOf(arr[i]-1) === -1) {
      return false;
    }
  }
  return true;
}