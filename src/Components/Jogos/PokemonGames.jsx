import axios from "axios";
import { useEffect, useState } from "react"

function Games (){
        const [gameVersion, setGameVersion] = useState();
        const listaJogos = async () => {
            try{
                const URL = `https://pokeapi.co/api/v2/version/`
                const response = await axios.get(URL);
                setGameVersion(response.data.results['0'].name)
            } catch(error){
                console.error('Pokemon not found');
            }
        }

        useEffect(() => {
            listaJogos()
        })

    return(
        <>
            <div className="listaJogos">
                <h2>{gameVersion}</h2>
            </div>
        </>
    )
}

export default Games