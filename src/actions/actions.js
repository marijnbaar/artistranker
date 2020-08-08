export const setGreeting = greetingText => ({
  type: 'SET_GREETING',
  greetingText,
});

let id = 0;
const incrementId = () => {
  id += 1;
  return id;
};

export const addTodo = text => ({
  type: 'ADD_TODO',
  id: incrementId(),
  text,
  completed: false,
});

export const deleteTodo = comingId => ({
  type: 'DELETE_TODO',
  id: comingId,
});

export const toggleTodo = comingId => ({
  type: 'TOGGLE_TODO',
  id: comingId,
});
