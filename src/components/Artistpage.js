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
        <label><p>Update Artist Name</p></label>
        <input type="text" id="updateArtistName" placeholder="Enter name" />
        <label><p>Update Artist Picture</p></label>
        <input type="file" id="updateArtistPicture" placeholder="Upload a picture" />
        <button type="button" className="btn-3" onClick={editArtist}>
          Submit
        </button>
      </form>

      <button type="button" className="btn-2" onClick={closeArtistPage}>
        <i className="fas fa-trash" />
      </button>
    </div>
  )

}

export default Artistpage;
