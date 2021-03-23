interface Employee {
  pay(): void;
}

class FullTimeEmployee implements Employee {
  pay() {
    console.log(`full time!!`);
  }
  workFullTime() {}
}

class PartTimeEmployee implements Employee {
  pay() {
    console.log(`part time!!`);
  }
  workPartTime() {}
}

// 세부적인 타입을 인자로 받아서 정말 추상적인 타입으로 다시 리턴하는 함수는 💩💩💩
function payBad(employee: Employee): Employee {
  employee.pay(); 
  return employee;
}

function pay<T extends Employee>(employee: T): T { // T타입을 이용해서 employee를 받고, 동일한 T 리턴 
    employee.pay(); // pay() 함수가 처음에 없는 이유 => 제네릭이 너무 일반적인 타입이라 어떤 타입이라도 들어올 수 있기 때문에, 코딩하는 시점에 타입에 대한 정보가 X
    // 세부적인 조건 달기 => 일반타입이지만 아무 타입이 아니라 Employee를 확장한 타입만  
    return employee;
}

const ellie = new FullTimeEmployee();
const bob = new PartTimeEmployee();
ellie.workFullTime;
bob.workPartTime;

const ellieAfterPay = pay(ellie);
const bobAfterPay = pay(bob);


const obj = {
    name: 'ellie',
    age: 20,
}

const obj2 = {
    animal: '🐱',
}

function getValue<T, K extends keyof T>(obj: T, key:K): T[K] { // keyof: object안의 key의 타입, return되는 값: object에 있는 key의 value 타입 
    return obj[key]; // 전달된 obj의 key의 값에 동적으로 접근해 리턴 
}
console.log(getValue(obj, 'name')); // ellie
console.log(getValue(obj, 'age')); // 20
console.log(getValue(obj2, 'animal')); // 🐱

