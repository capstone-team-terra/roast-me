import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  function handleSubmit(e) {
    //axios.post("/handleUpload")
    e.preventDefault();
    // const data = { name: value };
    // console.log('submit');
    // console.log(value);
    //fetch('http://127.0.0.1:3145/handleUpload', {
    //  method: 'POST',
    //   headers: {
    //     'Content-type': 'application/json',
    //   },
    //   body: JSON.stringify(data),
    // })
    //   .then(res => res.json())
    //   .then(res => console.log(res));
    fetch('http://127.0.0.1:3145/handleUpload', {
      method: 'POST',
      headers: {
        'Access-Control-Allow-Origin': '*'
      }
    })//.then(res => res.json()).then(data => {
    //  setCurrentTime(data.time);
    //});
    console.log('SUCCESS!')
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
