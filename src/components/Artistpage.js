import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { updateArtist, closeArtist } from '../actions/actions';

function Artistpage({ artistId }) {
  const dispatch = useDispatch();

  const closeArtistPage = () => {
    dispatch(closeArtist());
  };

  const editArtist = event => {
    event.preventDefault();
    const updateName = document.getElementById('updateArtistName').value;
    const addPicture = document.getElementById('updateArtistPicture').value;
    dispatch(updateArtist(artistId, updateName, addPicture));
  };

  return (
    <div className="artist-page-wrapper">
      <h2>Artist information</h2>
      <form className="artist-form" onSubmit={editArtist}>
        <div className="artist-name-wrapper">
          Update Artist Name
          <label htmlFor="new-name">
            <input type="text" id="updateArtistName" placeholder="Enter name" />
          </label>
        </div>
        <div className="artist-name-wrapper">
          Update Artist Picture
          <label htmlFor="new-picture">
            <input type="text" id="updateArtistPicture" placeholder="Upload a picture url" />
          </label>
          <button type="submit" className="btn-3">
            submit
          </button>
        </div>
      </form>

      <button type="button" className="btn-4" onClick={closeArtistPage}>
        back
      </button>
    </div>
  );
}

Artistpage.propTypes = {
  artistId: PropTypes.func.isRequired,
};

export default Artistpage;
