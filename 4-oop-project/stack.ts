interface Stack {
  readonly size: number;
  push(value: string): void;
  pop(): string;
}

type StackNode = {
  // 데이터를 담고 있는 데이터 타입
  // 데이터를 정의할 때 사용자가 데이터를 넣어 한단계 감싸는 것을 만들 때 불변성을 유지하는 것이 좋음
  readonly value: string;
  readonly next?: StackNode; // = next: StackNode | undefined
};

class StackImpl implements Stack {
  private _size: number = 0;
  // 외부에서 변경 불가, but 여기에서 바로 readonly를 붙이면 내부에서도 변경 X
  // 내부에서만 쓰이는 변수에 _을 붙임, 동일한 이름의 public 변수가 있다는 의미
  private head?: StackNode;

  constructor(private capacity: number) {
    // 허용사이즈 initial value 설정
  }
  get size() {
    // get으로 외부에서 볼 수 있게 정의(set이 없으므로 변경은 x)
    return this._size;
  }

  push(value: string) {
    if (this.size === this.capacity) {
      throw new Error('Stack is full!');
    }
    const node: StackNode = { value, next: this.head }; // StackNode 타입을 따라가는 데이터
    this.head = node;
    this._size++;
  }

  pop(): string {
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

const stack = new StackImpl(10);
stack.push('susu 1');
stack.push('hana 2');
stack.push('lili 3');
while (stack.size !== 0) {
  console.log(stack.pop());
}

stack.pop();
