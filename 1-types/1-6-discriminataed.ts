{
  // function: login -> success, fail(성공하면 response, 실패하면 reason)
  type SuccessState = {
    result: 'success';
    response: {
      body: string;
    };
  };
  type FailState = {
    result: 'fail';
    reason: string;
  };
  type LoginState = SuccessState | FailState;
  function login(): LoginState {
    return {
      result: 'success',
      response: {
        body: 'logged in!',
      },
    };
  }
  // printLoginState(state: LoginState)
  // success -> 🎉body
  // fail -> 😥 reason
  function printLoginState(state: LoginState) {
    if (state.result === 'success') {
      // response라는 키가 state 오브젝트 안에 있다면
      console.log(`🎉 ${state.response.body}`);
    } else {
      console.log(`😥 ${state.reason}`);
    }
  }
}
