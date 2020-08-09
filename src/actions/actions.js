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

export const incrementArtist = comingId => ({
  type: 'INCREMENT',
  id: comingId,
});

export const decrementArtist = comingId => ({
  type: 'DECREMENT',
  id: comingId,
});

export const displayArtist = comingId => ({
  type: 'DISPLAY_ARTIST',
  id: comingId,
});

export const sortArtist = comingId => ({
  type: 'SORT_ARTIST',
  id: comingId,
});

export const closeArtist = () => ({
  type: 'CLOSE_ARTIST',
});

export const updateArtist = (id, text, picture) => ({
  type: 'UPDATE_ARTIST',
  id,
  text,
  picture,
});
