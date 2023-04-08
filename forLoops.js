const arr = ['apple', 'graph', 'banana', 'orange', 'mango', 'pineapple', 'strawberry', 'kiwi', 'pear', 'watermelon', 'cherry', 'lemon', 'lime', 'blueberry', 'raspberry', 'coconut', 'peach', 'apricot', 'plum', 'grape', 'melon', 'pomegranate', 'cantaloupe', 'blackberry', 'fig', 'papaya', 'guava', 'jackfruit', 'lychee', 'mango', 'nectarine', 'persimmon', 'quince', 'tangerine', 'tomato', 'yuzu', 'zucchini'];

//for in 문에는 배열의 인덱스가 출력된다.
for(const item in arr) {
    console.log(item);
}

//for of 문에는 배열의 요소가 출력된다.
for(const item of arr) {
    console.log(item);
}