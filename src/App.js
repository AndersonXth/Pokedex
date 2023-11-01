import Home from "./Pages/Home/Home";
import './app.css'
import PokedexCard from "./Components/pokedexcard/PokedexCard";
import { useState } from "react";

function App() {
  const [pokedexCardVisivel,setpokedexCardVisivel] = useState(false)
  const showPokedexCard = () => {
    setpokedexCardVisivel(true)
  }


  return (
    <>
      <div className="container">
        <div className="box-esquerda">
        <Home showPokedexCard = {() => setpokedexCardVisivel(true)} />
        </div>
        <div className="box-direita">
          {pokedexCardVisivel && <PokedexCard/>}
        </div>
      </div>
    </>
  )
}

export default App;