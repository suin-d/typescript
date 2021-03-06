{
  type PositionType = {
    x: number;
    y: number;
  };
  interface PositionInterface {
    x: number;
    y: number;
  }

  // ๐ only interfaces can be merged.
  // PoisitionInterface๋ฅผ ํ์์ผ๋ก ๋ฐ๋ ๊ณณ์์๋ ํญ์ ๊ฐ์ ์ด๋ฆ์ผ๋ก ์ ์๋ ๊ฑธ ํฉํ ๊ฒ์ผ๋ก ์ด์ฉํด์ผ(x, y, z)
  interface PositionInterface {
    z: number;
  }

  // object โ ๋๋ค ์ค๋ธ์ ํธ ์ ์ํ๊ณ  ํ์ ํ ๋น ๊ฐ๋ฅ
  const obj1: PositionType = {
    x: 1,
    y: 1,
  };
  const obj2: PositionInterface = {
    x: 1,
    y: 1,
    z: 1,
  };

  // class โ
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
  // ์ธํฐํ์ด์ค๋ ์์์ ์ด์ฉ
  interface ZpositionInterface extends PositionInterface {
    z: number;
  }
  // ํ์์ ์ธํฐ์น์ ์ด์ฉ
  type ZpositionType = PositionType & { z: number };

  // ๐ Type aliases can use computed properties
  type Person = {
    name: string;
    age: number;
  };
  type Name = Person['name']; // string

  type NumberType = number;
  type Direction = 'left' | 'right';
}
