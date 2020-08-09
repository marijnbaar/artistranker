import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  incrementArtist, decrementArtist, displayArtist, deleteArtist, sortArtist,
} from '../actions/actions';

export function Artist({
  text, id, dlt, count, increment, decrement, display, picture, sort,
}) {
  return (
    <div>
      <li className="artist-list">
        {picture ? (
          <img
            className="fit-picture"
            src={picture}
            alt="hi" />
        )
          : null}

        <p>{text}</p>
        <button type="button" className="btn-3" onClick={display.bind(null, id)}>
          show
        </button>
        <p>
          <i className="fas fa-star" />
          {count}
        </p>
        <button
          type="button"
          className="btn-3"
          onClick={() => {
            decrement(id);
            sort(id);
          }}>
          <i className="fas fa-minus" />
        </button>
        <button
          type="button"
          className="btn-3"
          onClick={() => {
            increment(id);
            sort(id);
          }}>
          <i className="fas fa-plus" />
        </button>
        <button type="button" className="btn-2" onClick={() => dlt(id)}>
          <i className="fas fa-trash" />
        </button>
      </li>
      <hr />
    </div>
  );
}

Artist.propTypes = {
  text: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  dlt: PropTypes.func.isRequired,
  count: PropTypes.number.isRequired,
  display: PropTypes.func.isRequired,
  increment: PropTypes.func.isRequired,
  decrement: PropTypes.func.isRequired,
  picture: PropTypes.string.isRequired,
  sort: PropTypes.func.isRequired,
};

export default connect(null, {
  dlt: deleteArtist,
  increment: incrementArtist,
  decrement: decrementArtist,
  display: displayArtist,
  sort: sortArtist,
})(Artist);
