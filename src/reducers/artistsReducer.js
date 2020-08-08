const artistsReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_ARTIST':
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false,
        },
      ];
 
    case 'DELETE_ARTIST':
      return state.filter(artist => artist.id !== action.id);
    default: return state;
  }
};

export default artistsReducer;
