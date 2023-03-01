export const bubbleSort = (data) => {
  console.log('bubble')
  const arr = [];
  const repeat = data.length;
  for(let i=0;i<repeat;i++) {
    arr.push(parseInt(data[i]));
  }
  for(let i=0;i<repeat;i++) {
    for(let j=0;j<repeat;j++) {
      if(arr[i] < arr[j]) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }

  return arr.join('');
};

