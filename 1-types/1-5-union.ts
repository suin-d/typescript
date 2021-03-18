{
  /**
   * Union Types: OR
   * : 발생할 수 있는 모든 케이스 중 딱 하나를 담을 수 있는 타입 만들고 싶을 때 이용
   */
  type Direction = 'left' | 'right' | 'up' | 'down';
  function move(direction: Direction) {
    console.log(direction);
  }
  move('left');

  type TileSize = 8 | 16 | 32;
  const tile: TileSize = 8; // 다른 숫자 할당 불가

  // function: login -> success, fail(성공하면 response, 실패하면 reason)
  type SuccessState = {
    response: {
      body: string;
    };
  };
  type FailState = {
    reason: string;
  };
  type LoginState = SuccessState | FailState;
  function login(): LoginState {
    return {
      response: {
        body: 'logged in!',
      },
    };
  }
  // printLoginState(state: LoginState)
  // success -> 🎉body
  // fail -> 😥 reason
  function printLoginState(state: LoginState) {
    if ('response' in state) {
      // response라는 키가 state 오브젝트 안에 있다면
      console.log(`🎉 ${state.response.body}`);
    } else {
      console.log(`😥 ${state.reason}`);
    }
  }
  // BUT descriminated union 사용!
}
