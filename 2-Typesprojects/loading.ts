{
  /**
   * Print Loading State
   */
  type LoadingState = {
    state: 'loading';
  };

  type SuccessState = {
    state: 'success';
    response: {
      body: string;
    };
  };

  type FailState = {
    state: 'fail';
    reason: string;
  };

  type ResourceLoadState = LoadingState | SuccessState | FailState;

  function printLoginStateThird(loadState: ResourceLoadState) {
    switch (loadState.state) {
      case 'loading': {
        console.log(`👀 ${loadState.state}...`);
        break;
      }
      case 'success': {
        console.log(`😃 ${loadState.response.body}`);
        break;
      }
      case 'fail': {
        console.log(`😱 ${loadState.reason}`);
        break;
      }
      default:
        throw new Error(`unknown state: ${loadState}`);
    }
  }

  printLoginStateThird({ state: 'loading' }); // 👀 loading...
  printLoginStateThird({ state: 'success', response: { body: 'loaded' } }); // 😃 loaded
  printLoginStateThird({ state: 'fail', reason: 'no network' }); // 😱 no network
}
