import axios from "axios";
import '../Jogos/PokemonGames.css'
import { useEffect, useState } from "react"

function Games (){
        const [gameVersion, setGameVersion] = useState([]);
        const listaJogos = async () => {
            try{
                const URL = `https://pokeapi.co/api/v2/version/`
                const response = await axios.get(URL);
                setGameVersion(response.data.results)
            } catch(error){
                console.error('Pokemon not found');
            }
        }

        useEffect(() => {
            listaJogos()
        },[])

        return (
            <>
                <div >
                    <h2>Lista de Versões de Jogos:</h2>
                    <ul>
                        {gameVersion.map((version, index) => (
                            <li key={index}>{version.name}</li>
                        ))}
                    </ul>
                </div>
            </>
        )
}

export default Games