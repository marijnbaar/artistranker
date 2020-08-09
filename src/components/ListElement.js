import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { deleteArtist } from '../actions/actions';
import { incrementArtist } from '../actions/actions';
import { decrementArtist } from '../actions/actions';


export function Artist({
  text, id, dlt, count, increment, decrement
}) {

  return (
    <div>
      <li className="artist-list">
        <p>{text}</p><p><i className='fas fa-star' />{count}</p>
        <button type="button" className="btn-3" onClick={() => decrement(id)}>
          <i className='fas fa-minus' />
        </button>
        <button type="button" className="btn-3" onClick={() => increment(id)} >
          <i className='fas fa-plus' />
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
  count: PropTypes.func.isRequired,
  update: PropTypes.func.isRequired
};


export default connect(null, { dlt: deleteArtist, increment: incrementArtist, decrement: decrementArtist })(Artist);
