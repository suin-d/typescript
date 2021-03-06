{
  // JavaScript π©
  function jsAdd(num1, num2) {
    return num1 + num2;
  }

  // TypeScript β¨
  function add(num1: number, num2: number): number {
    return num1 + num2;
  }

  // JavaScript π©
  function jsFetchNum(id) {
    // code ...
    // code ...
    // code ...
    return new Promise((resolve, reject) => {
      resolve(100);
    });
  }

  // TypeScript β¨
  function fetchNum(id: string): Promise<number> {
    // code ...
    // code ...
    // code ...
    return new Promise((resolve, reject) => {
      resolve(100);
    });
  }

  // JavaScript β¨ => TypeScript
  // Optional parameter
  function printName(firstName: string, lastName?: string) {
    console.log(firstName);
    console.log(lastName); // undefined
  }
  printName('Steve', 'Jobs'); // ν­μ ν¨μμμ μ μν μΈμ κ°―μλλ‘ μλ ₯ν΄μΌ
  // but, μ΄λ¨ λλ μ΄λ¦ or μ±λ§ μΆλ ₯νκ³  μΆλ€λ©΄? => Optional parameter μ¬μ©
  // μ λ¬ν΄λ λκ³  μ λ¬νμ§ μμλ λλ μΈμ λ€μ λ¬Όμν ? μμ±
  printName('Ellie');
  printName('Anna');
  // lastName: string | undefined => ν­μ μ λ¬νμ§ μμλ λλ μΈμμ undefinedμ λͺμν΄μΌν¨, optional parameter μ¬μ©!

  // Default parameter
  function printMessage(message: string = 'default message') {
    console.log(message);
  }
  printMessage();

  // Rest parameter
  // μνλ μ«μλ§νΌ λ€ λν ν, λν μ«μ λ¦¬ν΄
  // Rest parameterλ₯Ό μ΄μ©νλ©΄ λͺ¨λ  μ λ¬λλ μΈμλ€μ κ°νΈνκ² λ°°μ΄ ννλ‘ λ°μμ¬ μ μλ€
  function addNumbers(...numbers: number[]): number {
    return numbers.reduce((a, b) => a + b);
  }
  console.log(addNumbers(1, 2));
  console.log(addNumbers(1, 2, 3, 4));
  console.log(addNumbers(1, 2, 3, 4, 5, 0));
}
