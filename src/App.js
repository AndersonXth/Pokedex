import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import './app.css'
import Pokedexcard from "./Components/pokedexcard/PokedexCard";

function App() {
  return (
    <>
      <div className="container">
        <div className="box-esquerda">
          <Home/>    
        </div>
        <div className="box-direita">
          <Pokedexcard/>      
        </div>
      </div>
    </>
  )
}

export default App;