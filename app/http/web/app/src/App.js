import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  async function handleSubmit(e) {
    //axios.post("/handleUpload")
    e.preventDefault();
    // const data = { name: value };
    // console.log('submit');
    // console.log(value);
    await fetch('http://127.0.0.1:3145/handleUpload', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      //body: JSON.stringify(data),
    })
      .then(res => res.json())
      .then(res => console.log(res));
  }

  return (
    <div className="App">
      <header className="App-header">
        <form action="/handleUpload" method="post" encType="multipart/form-data" onSubmit={handleSubmit}>
            Choose the file: <input type="file" name="submission"/> <br />
            <input type="submit" value="Upload"/>
        </form> 
      </header>
    </div>
  );
}

export default App;
