{
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  };

  const BEANS_GRAMM_PER_SHOT: number = 7; // 한샷에 7gram
  let coffeeBeans: number = 0;

  function makeCoffee(shots: number): CoffeeCup {
    if (coffeeBeans < shots * BEANS_GRAMM_PER_SHOT) {
      // 커피콩이 충분히 있는지 확인
      throw new Error('Not enough coffee beans!');
    }
    // 커피 만든만큼 커피콩 그람수 줄이기
    coffeeBeans -= shots * BEANS_GRAMM_PER_SHOT;
    return {
      shots, // 키, 값 동일할 때 생략 가능
      hasMilk: false,
    };
  }
  coffeeBeans += 3 * BEANS_GRAMM_PER_SHOT;
  const coffee = makeCoffee(2);
  console.log(coffee); //{ shots: 2, hasMilk: false }
}
