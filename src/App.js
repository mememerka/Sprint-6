
import './App.css';
import Frase from './components/escena/Escena';
import elements from "./frases"
import { useState } from 'react';
import React from 'react';
import './styles/styles.css'

function App() {
  const [currentposition,setcurrentposition] = useState(0);

  const ant = () =>{
    if (currentposition>0){
    return setcurrentposition(currentposition-1)};
  }; 
  
  const next = () => {
    if (currentposition<3){
    return setcurrentposition(currentposition+1)};
  };
 
  const [inici,setinici] = useState(0);

  const iniciar = () => setinici(inici+1);

  return  <div className="Main">
            { inici ?
            <div className="Story" style={{backgroundImage:`url(${elements[currentposition].img})`,
                                            backgroundPosition: 'center',
                                            backgroundSize: '100%  100%',
                                            backgroundRepeat: 'no-repeat',
                                            width: '100%',
                                            height: '100vh'}} >
              <div className="Buttons">
                <button className="btn" onClick={ant}>Anterior</button>
                <button className="btn" onClick={next}>Següent</button>
              </div>
              <div className="text">
                {currentposition}
                {
                  elements.map((element,key)=> <Frase string={element.txt} active={key===currentposition}/>)
                }
              </div>
            </div>
            :<div className="StartPage">
              <h1 className="title">Benvingut</h1>
              <h2 className="subtitle">Apreta el botó per començar!</h2>
              <button className="primary" onClick={iniciar}>START</button>
            </div>}
         </div> 
}

export default App;
