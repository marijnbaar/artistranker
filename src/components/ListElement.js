import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { incrementArtist, decrementArtist, displayArtist, deleteArtist } from '../actions/actions';

export function Artist({
  text, id, dlt, count, increment, decrement, display
}) {

  return (
    <div>
      <li className="artist-list">
        <p>{text}</p>
        <button type="button" className="btn-3" onClick={display(id)}>show
        </button>
        <p><i className='fas fa-star' />{count}</p>
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
const mapStateToProps = state => ({
  display: state.artistPageShow,
});

export default connect(mapStateToProps, { dlt: deleteArtist, increment: incrementArtist, decrement: decrementArtist, display: displayArtist })(Artist);
