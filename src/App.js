import Home from "./Pages/Home/Home";
import './app.css'
import PokedexCard from "./Components/pokedexcard/PokedexCard";
import Games from "./Components/Jogos/PokemonGames";
import { useState } from "react";

function App() {
  const [cartaAtual, setCartaAtual] = useState(null);

  const showPokedexCard = () => {
    setCartaAtual('pokedex');
  };

  const showJogosCard = () => {
    setCartaAtual('jogos');
  };

  return (
    <>
      <div className="container">
        <div className="box-esquerda">
          <Home showPokedexCard={showPokedexCard} showJogosCard={showJogosCard} />
        </div>
        <div className="box-direita">
          {cartaAtual === 'pokedex' && <PokedexCard />}
          {cartaAtual === 'jogos' && <Games />}
        </div>
      </div>
    </>
  );
}

export default App;