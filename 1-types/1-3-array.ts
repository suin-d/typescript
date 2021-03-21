{
  // Array
  const fruits: string[] = ['🍅', '🍌'];
  const scroes: Array<number> = [1, 3, 4]; // = number[]
  function printArray(fruits: readonly string[]) {
    // 주어진 데이터를 변경할 수 없는 경우 타입으로 보장하는 방법: readonly
    // readonly를 작성할 땐 string[] 이런 방식으로만 가능 => 일관성 있는 코드작성을 위해 1)방식 사용
  }

  // Tuple : 서로 다른 타입을 함께 가질 수 있는 배열 -> interface, type alias, class로 대체
  let student: [string, number];
  student = ['name', 123];
  student[0]; // name
  student[1]; // 123
  // 꼭 필요한 경우가 아니라면 튜플 사용 권장하지 않음
  // 데이터에 접근할 때 인덱스 방식으로 접근하는 게 접근성이 떨어짐
  const [name, age] = student;
  // 구조분해할당(Destructuring)으로 접근하는 방법도 있지만, 여전히 데이터가 정해진 곳이 아니라 사용하는 곳에서 임의로 결정하고 써야하는 단점 존재
}
