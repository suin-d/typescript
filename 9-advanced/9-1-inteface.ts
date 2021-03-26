{
  type PositionType = {
    x: number;
    y: number;
  };
  interface PositionInterface {
    x: number;
    y: number;
  }

  // 😆 only interfaces can be merged.
  // PoisitionInterface를 타입으로 받는 곳에서는 항상 같은 이름으로 정의된 걸 합한 것으로 이용해야(x, y, z)
  interface PositionInterface {
    z: number;
  }

  // object ★ 둘다 오브젝트 정의하고 타입 할당 가능
  const obj1: PositionType = {
    x: 1,
    y: 1,
  };
  const obj2: PositionInterface = {
    x: 1,
    y: 1,
    z: 1,
  };

  // class ★
  class Pos1 implements PositionType {
    x: number;
    y: number;
  }
  class Pos2 implements PositionInterface {
    z: number;
    x: number;
    y: number;
  }

  // Extends
  // 인터페이스는 상속을 이용
  interface ZpositionInterface extends PositionInterface {
    z: number;
  }
  // 타입은 인터섹션 이용
  type ZpositionType = PositionType & { z: number };

  // 😆 Type aliases can use computed properties
  type Person = {
    name: string;
    age: number;
  };
  type Name = Person['name']; // string

  type NumberType = number;
  type Direction = 'left' | 'right';
}
