import React from 'react'
import './App.css'

function App() {
    function throwError() {
        throw new Error('Oh no!')
    }
    return (
        <div className="App">
            {throwError()}
            <h1> start writing code because you rock !! </h1>
        </div>
    )
}

export default App
