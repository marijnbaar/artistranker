import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateArtist, closeArtist } from '../actions/actions'

function Artistpage(artistId) {
  const dispatch = useDispatch();

  const allArtists = useSelector(state => state.artistList);
  const selectArtist = allArtists.find(artist => artist.id === artistId)

  const closeArtistPage = () => {
    dispatch(closeArtist());
  }

  const editArtist = (event) => {
    event.preventDefault();
    const updateName = document.getElementById('updateArtistName').value;
    const addPicture = document.getElementById('updateArtistPicture').value;
    dispatch(updateArtist(artistId, updateName, addPicture))
  }

  return (
    <div className="artist-page-wrapper">
      <h2>Artist information</h2>
      <p>{selectArtist}</p>
      <form className="artist-form" >
        <div className="artist-name-wrapper">
          <label>Update Artist Name</label>
          <input type="text" id="updateArtistName" placeholder="Enter name" />
        </div>
        <label>Update Artist Picture</label>
        <input type="text" id="updateArtistPicture" placeholder="Upload a picture url" />
        <button type="button" className="btn-3" onClick={editArtist}>
          submit
        </button>
      </form>

      <button type="button" className="btn-4" onClick={closeArtistPage}>
        back
      </button>
    </div>
  )

}

export default Artistpage;
