const reverse = (data) => {
  const text = data;
  // const arr = [];
  let reverse = '';
  for(let i=0;i<text.length;i++) {
    // arr.push(text[text.length - (i+1)]);
    reverse += text[text.length - (i+1)];
  }
  // return arr.join('');
  return reverse;
};