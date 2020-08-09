import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addArtist } from '../actions/actions';

export function ArtistInput({ add }) {
  return (
    <div className="newArtist">
      <input id="listInput" placeholder="Add an artist" />
      <button
        className="btn-1"
        type="submit"
        onClick={() => (document.getElementById('listInput').value
          ? add(document.getElementById('listInput').value)
          : null)}>
        add
      </button>
      <hr />
    </div>
  );
}

ArtistInput.propTypes = {
  add: PropTypes.func.isRequired,
};

export default connect(null, { add: addArtist })(ArtistInput);
