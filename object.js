const obj = { a: 1, b: 2, c: 3 };

// Object 에 값 추가
obj.d = 4;

// Object 에 값은 추가하는 함수
//assign은 객체를 합쳐준다 {e:5} 를 obj에 합친다.
//obj 에 { e: 5 } 를 합침
Object.assign(obj, { e: 5 });

console.log(obj);

const obj2 = { f: 6, g: 7 };

Object.assign(obj, obj2);

console.log('assign : ',obj);

//Object 에서 값 삭제
delete obj.a;

console.log('delete : ',obj);