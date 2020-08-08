import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ListElement from './ListElement';

export function Artist({ artists }) {
  return (
    <div className="artist-list">
      <ul>
        {artists.length
          ? artists.map(artist => (
            <ListElement
              key={artist.id}
              text={artist.text}
              id={artist.id}
              counter={artist.counter}
            />
          ))
          : <p>Your list is empty.</p>}
      </ul>
    </div>
  );
}

Artist.propTypes = {
  artists: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const mapStateToProps = state => ({
  artists: state.artistList,
});

export default connect(mapStateToProps)(Artist);
