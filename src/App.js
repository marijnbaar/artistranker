import React from 'react';
import TodoInput from './components/TodoInput';
import Todo from './components/Artist';
import './App.css';

function App() {
    return (
        <div className="app">
            <header>
                <p>Write your name</p>
               
            </header>
         
                <h2>This is your To Do List: </h2>
                <TodoInput />
                <Todo />
            
        </div>
    );
};

export default App;
