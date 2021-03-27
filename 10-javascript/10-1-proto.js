const x = {};
const y = {};
console.log(x);
console.log(y); // 자바스크립트에서 모든 오브젝트는 오브젝트라는 프로토를 상속 
console.log(x.___proto___ === y.___proto___); // true 

const array = [];
console.log(array); // [] > ___proto___ 

console.clear();
function CoffeeMachine(beans){
  this.beans = beans;
  // Instance member level 
  this.makeCoffee = (shots) => {
    console.log('making...☕')
  }
}


const machine1 = new CoffeeMachine(10);
const machine2 = new CoffeeMachine(20);

console.log(machine1);
console.log(machine2);

function LatteMachine(milk) {
  this.milk = milk;
}
LatteMachine.prototype = Object.create(CoffeeMachine.prototype);

const latteMachine = new LatteMachine(123);
console.log(latteMachine);