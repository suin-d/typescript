type Check<T> = T extends string ? boolean : number; // 기존 타입이 문자열을 상속하면 boolean, 아니면 number
type Type = Check<string>; // string이 전달되어 boolean

type TypeName<T> = T extends string
  ? 'string'
  : T extends number
  ? 'number'
  : T extends boolean
  ? 'boolean'
  : T extends undefined
  ? 'undefined'
  : T extends Function
  ? 'function'
  : 'object';

type T0 = TypeName<string>;
('string');
type T1 = TypeName<'a'>;
('string');
type T2 = TypeName<() => void>;
('function');
type T3 = TypeName<123>;
