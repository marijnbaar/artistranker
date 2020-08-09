import React from 'react';
import ArtistInput from './components/Artistinput';
import './App.css';
import { useSelector } from 'react-redux';
import ListElement from './components/ListElement';
import Artistpage from './components/Artistpage';


function App() {
  const allArtists = useSelector(state => state.artistList);
  const artistId = useSelector(state => state.artistId)
  const displayArtist = useSelector(state => state.artistPageShow)

  return (
    <div className="app">
      <header>
        <p>Time to rank!</p>

      </header>
      <main>
        <h2>Your list with artists: </h2>
        <ArtistInput />
        <div className="artist-list">
          <ul>
            {allArtists.length
              ? allArtists.map(artist => (
                <ListElement
                  key={artist.id}
                  text={artist.text}
                  id={artist.id}
                  count={artist.count}
                  pic={artist.pic}
                />
              ))
              : <p>Your list is empty. Add an artist to the list and reward them with a star!</p>}
          </ul>
        </div>
        {displayArtist
        ? <Artistpage artistId={artistId} />
        : null }
  
      </main>
      </div>

  );
};

export default App;
