import React from "react";
import ReactDom from 'react-dom/client';
import App from "./App"
import './main.css';  

// const Application = () => {
//   return <div>
//     <h1>Voici un composant</h1>
//     <p>Alors là  c'est fort</p>
//   </div>
  
// }
// COMMENTER : CTRL + K puis CTRL + C 
// DECOMMENTER : CTRL + K puis CTRL + U 

// class Application extends React.Component {
//   render(){
//     return <div>
//          <h1>Voici un composant</h1>
//         <p>Alors là  c'est fort</p>
//       </div>
//   }
// }

ReactDom.createRoot(document.getElementById('root')).render(<App/>)
