const artistsReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_ARTIST':
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          count: 0
        },
      ];
    
    case 'INCREMENT':
      return state.map(artist => (
        (artist.id === action.id && artist.count < 5) 
        ? { ...artist, count: artist.count + 1 } 
        : artist
    ))

    case 'DECREMENT':
      return state.map(artist => (
        (artist.id === action.id && artist.count > 0) 
        ? { ...artist, count: artist.count - 1 } 
        : artist
    ))
      
    case 'DELETE_ARTIST':
      return state.filter(artist => artist.id !== action.id);
    default: return state;
  }
  
};

export default artistsReducer;
