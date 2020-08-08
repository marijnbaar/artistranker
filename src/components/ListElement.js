import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { deleteArtist } from '../actions/actions';
import counter from '../reducers/counter';

export function Artist({
  text, id, dlt, counter
}) {
  return (
    <div>
      <li className="artist-list">
        <p>{text}{counter}</p>
        <button type="button" className="btn-3">
          <i className='far fa-circle' />
        </button>
        <button type="button" className="btn-3" >
          <i className='far fa-circle' />
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
  counter: PropTypes.func.isRequired
};


export default connect(null, { dlt: deleteArtist })(Artist);
