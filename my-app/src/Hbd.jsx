import React from 'react';
import './Hbd.css';
import cake from './cake.png';
import ReactAudioPlayer from 'react-audio-player';
import sound from './sound.ogg';

function Hbd() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={cake} className="App-logo" alt="logo" />
        <p>
          Happy Birthday!!
        </p>
        <ReactAudioPlayer src={sound} controls/>
      </header>
    </div>
  );
}

export default Hbd;
