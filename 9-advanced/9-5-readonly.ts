{
  type Todo = {
    title: string;
    description: string;
  };

  function display(todo: Readonly<Todo>) {
    // 전달된 todo 아이템을 보여주기만 하는 함수
    todo.title = 'jaja'; // 읽기 전용 속성이므로 'title에 할당할 수 없습니다.
  }
}
