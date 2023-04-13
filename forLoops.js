const arr = ['apple', 'graph', 'banana', 'orange', 'mango', 'pineapple', 'strawberry', 'kiwi', 'pear', 'watermelon', 'cherry', 'lemon', 'lime', 'blueberry', 'raspberry', 'coconut', 'peach', 'apricot', 'plum', 'grape', 'melon', 'pomegranate', 'cantaloupe', 'blackberry', 'fig', 'papaya', 'guava', 'jackfruit', 'lychee', 'mango', 'nectarine', 'persimmon', 'quince', 'tangerine', 'tomato', 'yuzu', 'zucchini'];

//for in 문에는 배열의 인덱스가 출력된다.
for(const item in arr) {
    console.log(item);
};

//for of 문에는 배열의 요소가 출력된다.
for(const item of arr) {
    console.log(item);
};

const numberArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//acc는 누적값, cur은 현재값
numberArr.reduce((acc, cur) => {
    console.log(acc, cur);
    return acc + cur;
}, 0);

//concat은 배열을 합쳐준다.
console.log(numberArr.concat([11, 12, 13, 14, 15]));

//find는 조건에 맞는 첫번째 요소를 반환한다.
const findFunc = arr.find((item, i) => {
    console.log(item, i);
    return item === 'apple?' || item === 'banana';
});

console.log(findFunc);
