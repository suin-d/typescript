{
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  };

  // 클래스 만들기 : 서로 관련있는 데이터, 함수 한곳에 묶고, 템플릿을 만드는 기능
  class CoffeeMaker {
    static BEANS_GRAMM_PER_SHOT: number = 7; // class level
    coffeeBeans: number = 0; // instance (object) level

    constructor(coffeeBeans: number) {
      // 클래스를 이용해서 오브젝트, 인스턴스를 만들 때 항상 처음에 호출되는 함수
      this.coffeeBeans = coffeeBeans;
      // 이 클래스 안에 있는 coffeeBeans를 전달해준 coffeBeans로 설정 가능
    }

    static makeMachine(coffeeBeans: number): CoffeeMaker {
      return new CoffeeMaker(coffeeBeans);
    }

    makeCoffee(shots: number): CoffeeCup {
      if (this.coffeeBeans < shots * CoffeeMaker.BEANS_GRAMM_PER_SHOT) {
        // 커피콩이 충분히 있는지 확인
        throw new Error('Not enough coffee beans!');
      }
      // 커피 만든만큼 커피콩 그람수 줄이기
      this.coffeeBeans -= shots * CoffeeMaker.BEANS_GRAMM_PER_SHOT;
      return {
        shots, // 키, 값 동일할 때 생략 가능
        hasMilk: false,
      };
    }
  }
  const maker = new CoffeeMaker(32); // new => 클래스의 인스턴스 만든다, () => 생성자 호출 / 데이터를 담아서 오브젝트를 만들 수 있습니다.
  console.log(maker);
  const maker2 = new CoffeeMaker(14);
  console.log(maker2);

  const maker3 = CoffeeMaker.makeMachine(3);
}
