import { useState } from "react";
import React from 'react'
import "./main.css"

export default function App() {
  const [liked, setLiked] =  useState(0);
  return (
    <div>
      <h1>Number of videos liked: {liked}</h1>
      <Video/>
      <Video/>
      <Video/>
      <Video/>
    </div>
  )
}

function Video(props) {
  const erased = false
  const liked = false

  return (<div className="video">
    <div className="div_in">
      <h1>Romain BOULANGE</h1>
      <p>Video XYZ qui me permet de tricher afin queles bouttons soit sur le cotés</p>
    </div>
      <button>Like</button>
      <button className="button_delete">Delete</button>
    
  </div>)
}