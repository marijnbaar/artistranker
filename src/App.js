import React from 'react';
import ArtistInput from './components/Artistinput';
import Artist from './components/Artist';
import './App.css';

function App() {
    return (
        <div className="app">
            <header>
                <p>Write your name</p>
               
            </header>
         
                <h2>This is your list with artists: </h2>
                <ArtistInput />
                <Artist />
        </div>
    );
};

export default App;
