Array;
[1, 2].map;

type Student = {
  passed: boolean;
};

const students: Student[] = [
  // type: Student 타입의 배열
  { passed: true },
  { passed: true },
  { passed: false },
];

const result = students.every((student) => {
  return student.passed;
}); // students.every(student => student.passed); // students를 빙글빙글 돌면서 각각의 student를 받아와 passed가 true인지 아닌지 검사

console.log(result); // false

class Animal {}
class Cat extends Animal {
  isCat: boolean = true;
}

class Dog extends Animal {
  isDog: boolean = true;
}

const animals: Animal[] = [new Cat(), new Cat(), new Dog()];
function isCat(animal: Animal): animal is Cat {
  // 어떤 동물을 받아오는데 animal is Cat만 리턴
  return (animal as Cat).isCat !== undefined; // animal을 Cat으로 캐스팅, 이 안에 isCat이 undefined이 아니라면 = cat
}
console.log(animals.every<Cat>(isCat)); // animals는 every를 돌면서 cat인지 아닌지 확인 (우리가 정의한 콜백함수 전달), false
