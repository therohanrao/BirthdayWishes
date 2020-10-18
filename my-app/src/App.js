import React from 'react';
import logo from './logo.svg';
import './App.css';
import cake from './cake.png';
import ReactAudioPlayer from 'react-audio-player';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={cake} className="App-logo" alt="logo" />
        <p>
          Happy Birthday!
        </p>
        <ReactAudioPlayer src="my_audio_file.ogg" controls/>
      </header>
    </div>
  );
}

export default App;
