{
  const obj = {
    name: 'susu',
  };

  obj.name; // susu
  obj['name']; // susu

  type Animal = {
    name: string;
    age: number;
    gender: 'male' | 'female';
  };

  type Name = Animal['name'];
  // 타임 Name은 Animal에 있는 name이라는 키의 값의 타입을 그대로 씀 // string
  const text: Name = 'hello'; // 문자열만 할당 가능

  type Gender = Animal['gender']; // 'male' | 'female'

  type Keys = keyof Animal;
  // Animal에 있는 모든 key를 타입으로 할당
  // 'name' | 'age' | 'gender' 문자열 유니온

  const key: Keys = 'gender';

  type Person = {
    name: string;
    gender: Animal['gender'];
  };

  const person: Person = {
    name: 'susu',
    gender: 'male',
  };
}
