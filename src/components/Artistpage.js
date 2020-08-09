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

  return (
    <div className="artist-page-wrapper">
      <h2>Artist information</h2>
      {/* <form className="artist-form" >
        
     

      </form>
       */}
    </div>
  )

}

export default Artistpage;
