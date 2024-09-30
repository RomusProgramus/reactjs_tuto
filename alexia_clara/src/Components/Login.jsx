import { useState } from 'react'
import React, { useRef } from 'react'
import './Login.css'
import Papa from 'papaparse'

function hash(string) {
  const utf8 = new TextEncoder().encode(string);
  return crypto.subtle.digest('SHA-256', utf8).then((hashBuffer) => {
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    const hashHex = hashArray
      .map((bytes) => bytes.toString(16).padStart(2, '0'))
      .join('');
    return hashHex;
  });
};

function getLocalPassword() {
  // Papa.parse('../assets/users.csv', {
  //   header: false,
  //   delimiter: ";",
  //   skipEmptyLines: true,
  //   complete: function (results) {
  //     console.log(results.data);
  //     console.log(results);
  //   },
  // });
  const path = '../assets/users.csv'
  console.log(path)
  Papa.parse(path, {
    header: false,
    download: true,
    delimiter: ';',
    skipEmptyLines: true,
    complete: function (results) {
      const rowsArray = [];
      const valuesArray = [];


      // Iterating data to get column name and their values
      results.data.map((d) => {
        rowsArray.push(Object.keys(d));
        valuesArray.push(Object.values(d));
      });

      // Parsed Data Response in array format
      console.log(results);

    },
  });
  
};

function App() {

  const inputLogin = useRef();
  const inputPassword = useRef();

  const handleSubmit = (event) => {
    //alert('Login: ' + inputLogin.current.value + '\nPassword:' + inputPassword.current.value);
    {getLocalPassword()}
    event.preventDefault();
    hash(inputPassword.current.value).then((hex) => console.log(hex)); 
  };
  
  return (
    <div className='background'>
      <div className='container'>
        <div className='container_img'>
          <img src="./src/assets/logo.png" alt='Logo'/>
        </div>
        <form onSubmit={handleSubmit}>
        <label for="username">Utilisateur</label>
        <input type="text" placeholder="Nom d'utilisateur" id="username" ref={inputLogin}/>

        <label for="password">Mot de passe</label>
        <input type="password" placeholder="Mot de passe" id="password" ref={inputPassword}></input>
        
        <button type="submit">Se connecter</button>
        </form>
        
      </div>
    </div>
  )
}


export default App