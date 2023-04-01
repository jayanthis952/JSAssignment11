function flattenArray(arr) {
    let flatArr = [];
  
    function flattenHelper(innerArr) {
      for (let i = 0; i < innerArr.length; i++) {
        const item = innerArr[i];
        if (Array.isArray(item)) {
          flattenHelper(item);
        } else {
          flatArr.push(item);
        }
      }
    }
  
    flattenHelper(arr);
  
    return flatArr;
  }
  const input = [ 1, 2, [ 3, 4, [ 5 ] ] ];
  const output = flattenArray(input);
  console.log(output); 

  