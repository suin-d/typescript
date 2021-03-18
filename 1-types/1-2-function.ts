{
  // JavaScript 💩
  function jsAdd(num1, num2) {
    return num1 + num2;
  }

  // TypeScript ✨
  function add(num1: number, num2: number): number {
    return num1 + num2;
  }

  // JavaScript 💩
  function jsFetchNum(id) {
    // code ...
    // code ...
    // code ...
    return new Promise((resolve, reject) => {
      resolve(100);
    });
  }

  // TypeScript ✨
  function fetchNum(id: string): Promise<number> {
    // code ...
    // code ...
    // code ...
    return new Promise((resolve, reject) => {
      resolve(100);
    });
  }

  // JavaScript ✨ => TypeScript
  // Optional parameter
  function printName(firstName: string, lastName?: string) {
    console.log(firstName);
    console.log(lastName); // undefined
  }
  printName('Steve', 'Jobs'); // 항상 함수에서 정의한 인자 갯수대로 입력해야
  // but, 어떨 때는 이름 or 성만 출력하고 싶다면? => Optional parameter 사용
  // 전달해도 되고 전달하지 않아도 되는 인자 뒤에 물음표 ? 작성
  printName('Ellie');
  printName('Anna');
  // lastName: string | undefined => 항상 전달하지 않아도 되는 인자에 undefined을 명시해야함, optional parameter 사용!

  // Default parameter
  function printMessage(message: string = 'default message') {
    console.log(message);
  }
  printMessage();

  // Rest parameter
  // 원하는 숫자만큼 다 더한 후, 더한 숫자 리턴
  // Rest parameter를 이용하면 모든 전달되는 인자들을 간편하게 배열 형태로 받아올 수 있다
  function addNumbers(...numbers: number[]): number {
    return numbers.reduce((a, b) => a + b);
  }
  console.log(addNumbers(1, 2));
  console.log(addNumbers(1, 2, 3, 4));
  console.log(addNumbers(1, 2, 3, 4, 5, 0));
}
