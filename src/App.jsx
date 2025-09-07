
import React, { useState } from 'react';
import Option from './Component/Option';
import Postes from "./Component/Postes"
import "./App.css";

function App() {
  const [Poste , SetPost] = useState ([{title:"post 1", explain: "Smart visin Tche", image: "por 11.jpg" }, 
      
                                       {title:"post 2", explain: "Talking Glove", image: "pro 22.jpg"}]);
  return (
  <div className='_div'>

    <Option addPost={(newPost) => SetPost([...Poste, newPost])} />

    {Poste.map((_post_,index) =>(
      <Postes
        key={index}
        title={_post_.title}
        explain={_post_.explain}
        image={_post_.image}
      />
    ))}
    
  </div>
);  
}

export default App