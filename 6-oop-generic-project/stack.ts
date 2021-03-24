interface Stack<T> {
  // 제네릭을 이용할 때는 인터페이스나 함수, 클래스, 타입 정의 부분에서 <T> 정의
  readonly size: number;
  push(value: T): void;
  pop(): T;
}

type StackNode<T> = {
  // 데이터를 담고 있는 데이터 타입
  // 데이터를 정의할 때 사용자가 데이터를 넣어 한단계 감싸는 것을 만들 때 불변성을 유지하는 것이 좋음
  readonly value: T;
  readonly next?: StackNode<T>; // 동일한 T타입의 StackNode<T>
};

class StackImpl<T> implements Stack<T> {
  private _size: number = 0;
  // 외부에서 변경 불가, but 여기에서 바로 readonly를 붙이면 내부에서도 변경 X
  // 내부에서만 쓰이는 변수에 _을 붙임, 동일한 이름의 public 변수가 있다는 의미
  private head?: StackNode<T>;

  constructor(private capacity: number) {
    // 허용사이즈 initial value 설정
  }
  get size() {
    // get으로 외부에서 볼 수 있게 정의(set이 없으므로 변경은 x)
    return this._size;
  }

  push(value: T) {
    if (this.size === this.capacity) {
      throw new Error('Stack is full!');
    }
    const node = { value, next: this.head }; // node를 head에 할당, head에 이미 정확한 타입 명시 => 타입 추론 활용 가능
    this.head = node;
    this._size++;
  }

  pop(): T {
    if (this.head == null) {
      // undefined가 아닌 null 체크 이유: null은 undefined이 아니기때문에 통과되어버림, null확인을 하면 null과 undefined를 둘다 거를 수 있음
      throw new Error('Stack is empty!');
    }
    const node = this.head;
    this.head = node.next;
    this._size--;
    return node.value;
  }
}

const stack = new StackImpl<string>(10); // 인스턴스 생성 시, 따로 타입 명시하지 않으면 unknown, 명시
stack.push('susu 1');
stack.push('hana 2');
stack.push('lili 3');
while (stack.size !== 0) {
  console.log(stack.pop());
}

const stack2 = new StackImpl<number>(10); // 인스턴스 생성 시, 따로 타입 명시하지 않으면 unknown
stack2.push(123);
stack2.push(456);
stack2.push(789);
while (stack2.size !== 0) {
  console.log(stack2.pop());
}
