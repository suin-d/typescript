{
  /**
   * Type Aliases
   */
  type Text = string;
  // Text란 타입을 문자열로
  const name: Text = 'su';
  const address: Text = 'korea';
  type Num = number;
  type Student = {
    name: string;
    age: number;
  };
  const student: Student = {
    name: 'susu',
    age: 18,
  };

  /**
   * String Literal Types
   * 타입을 문자열로 지정
   */
  type Name = 'name';
  // Name이란 타입은 문자열 'name'을 쓴다
  let suName: Name;
  suName = 'name';
  // 다른 문자열 할당 불가, 'name'만 가능
  type JSON = 'json';
  const json: JSON = 'json';

  type Boal = true;
}
