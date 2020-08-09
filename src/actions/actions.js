
let id = 0;
const incrementId = () => {
  id += 1;
  return id;
};

export const addArtist = text => ({
  type: 'ADD_ARTIST',
  id: incrementId(),
  text,
});

export const deleteArtist = comingId => ({
  type: 'DELETE_ARTIST',
  id: comingId,
});

export const incrementArtist = comingId => {
  return {
      type: 'INCREMENT',
      id: comingId
  }
}

export const decrementArtist = comingId => {
  return {
      type: 'DECREMENT',
      id: comingId
  }
}

export const displayArtist = comingId => {
  return {
    type: 'DISPLAY_ARTIST',
      id: comingId,
  }
}

export const closeArtist = comingId => {
  return {
    type: 'CLOSE_ARTIST',
      id: comingId,
  }
}

export const updateArtist = (id, text, picture) => {
  return {
    type: 'UPDATE_ARTIST',
    id, 
    text,
    picture
  }
}