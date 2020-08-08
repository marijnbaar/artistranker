import React from 'react';
import Greeting from './components/Greeting';
import GreetingInput from './components/GreetingInput';
import TodoInput from './components/TodoInput';
import Todo from './components/Todo';
import './App.css';

function App() {
    return (
        <div className="app">
            <header>
                <p>Write your name</p>
                <GreetingInput />
                <Greeting />
            </header>
         
                <h2>This is your To Do List: </h2>
                <TodoInput />
                <Todo />
            
        </div>
    );
};

export default App;
