{
  type Video = {
    title: string;
    author: string;
    description: string;
  };

  // [1, 2].map(item => item * item); // [1, 4]

  type Optional<T> = {
    [P in keyof T]?: T[P]; // for...in
    // T타입의 모든 키들을 순차적으로 P에 할당
  };

  type ReadOnly<T> = {
    readonly [P in keyof T]: T[P];
  };

  type VideoOptional = Optional<Video>; // Video 타입을 빙글빙글 돌면서 키(옵셔널)와 타입 지정

  const videoOp: VideoOptional = {
    title: 'hi',
    // dd:'dd', 없는 타입을 넣으면 오류!
    author: 'susu',
  };

  type Animal = {
    name: string;
    age: number;
  };

  const animal: Optional<Animal> = {
    name: 'rabbit',
  };

  animal.name = 'lili';

  const video: ReadOnly<Video> = {
    title: 'hi',
    author: 'susu',
    description: 'blablabla',
  };

  // video.author = 'susu222' // 읽기 전용 속성, 할당 불가

  // type VideoOptional = {
  //   title?: string;
  //   author?: string;
  //   descrition?: string;
  // }

  // type VideoReadOnly = {
  //   readonly title: string;
  //   readonly author: string;
  //   readonly descrition: string;
  // }

  type Nullable<T> = { [P in keyof T]: T[P] | null }; // 기존의 키 타입을 돌면서 value타입을 쓰거나 null 가능
  const obj2: Nullable<Video> = {
    title: null,
    author: null,
    description: 'desc',
  };

  type Proxy<T> = {
    get(): T;
    set(value: T): void;
  };

  type Proxify<T> = {
    [P in keyof T]: Proxy<T[P]>;
  };
}
