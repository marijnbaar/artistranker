import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ListElement from './ListElement';

export function Artist({ artists, count }) {
  return (
    <div className="artist-list">
      <ul>
        {artists.length
          ? artists.map(artist => (
            <ListElement
              key={artist.id}
              text={artist.text}
              id={artist.id}
              count={count}
            />
          ))
          : <p>Your list is empty.</p>}
      </ul>
    </div>
  );
}

Artist.propTypes = {
  artists: PropTypes.arrayOf(PropTypes.object).isRequired,
  count: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  artists: state.artistList,
  count: state.counter
});

export default connect(mapStateToProps)(Artist);
