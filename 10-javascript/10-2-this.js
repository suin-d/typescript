console.log(this); // Window

function simpleFunc() {
  console.log(this); // Window
}
simpleFunc(); // 글로벌에서 호출하는 건 윈도우에서 호출하는 것과 동일

console.clear();

class Counter {
  count = 0;
  increase = () => {
    console.log(this); // 1) Counter {count: 0, increase: ƒ} 2) undefined 3) Bob
  };
}

const counter = new Counter();
counter.increase();
const caller = counter.increase;

// const caller = counter.increase.bind(counter); // counter 오브젝트와 바인딩
caller(); // undefined => let, const로 선언한 변수는 윈도우에 등록 x, 이 caller를 호출한 것은 윈도우나 그 어떤 오브젝트도 아니기 때문에 undefined
// 원래 카운터에 있는 이 increase안에 있는 this가 클래스를 가르키고 있었으나, increase포인터를 caller라는 변수로 할당했기 때문에 this의 정보를 잃어버림

class Bob {}

const bob = new Bob();
bob.run = counter.increase;

bob.run(); // increase 함수 호출
