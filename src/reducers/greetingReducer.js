const greetingReducer = (greeting = 'user', action) => {
  switch (action.type) {
    case 'SET_GREETING':
      return action.greetingText;
    default: return greeting;
  }
};

export default greetingReducer;
