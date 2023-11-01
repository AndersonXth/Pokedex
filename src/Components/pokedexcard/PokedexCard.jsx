import '../pokedexcard/pokedexcard.css'
import { useEffect, useState } from "react";
import axios from "axios";

function Pokedexcard (){
    const [inputPokemonNome,setInputPokemonNome] = useState();
    const [dataPokemon,setDataPokemon] = useState();
    const [nomePokemon,setNomePokemon] = useState();
    const [imagemPokemon,setImagemPokemon] = useState();
    const [tipoPokemon,setTipoPokemon] = useState();
    const buscarPokemon = async (inputPokemonNome) =>{
        try{
            const URL = `https://pokeapi.co/api/v2/pokemon/${inputPokemonNome.toLowerCase()}`
            const response = await axios.get(URL);
            setNomePokemon(response.data.name);
            setDataPokemon(response.data);
            setTipoPokemon(response.data.types.map(type => type.type.name).join(' - '));
            setImagemPokemon(response.data.sprites.other['official-artwork'].front_default);
        } catch(error){
            console.error('Erro',error);
        }
    }

    useEffect(() => {
        buscarPokemon()
    },[inputPokemonNome])

    const pesquisarOutroPokemon = (e) =>{
        const novoNomePokemon = e.target.value;
        setInputPokemonNome(novoNomePokemon)

    }    

    const pesquisarPokemon = () => {
        buscarPokemon(inputPokemonNome)
    };
    
    return (
        <>
            <div className="card">
                <div className='card-imagem'>
                    <h2>Esse Pokemon é:</h2>
                    <h1>{nomePokemon}</h1>
                    <h2>{tipoPokemon}</h2>
                    <img className='pokemon' src={imagemPokemon}></img>
                </div>
                <div className='card-pesquisa'>
                    <h4>Procure o pokemon</h4>
                    <input value={inputPokemonNome} onChange={pesquisarOutroPokemon} type='text' placeholder='Nome ou Número'></input>
                    <br></br>
                    <button onClick={pesquisarPokemon}>Pesquisar</button>
                </div>
                
            </div>
        </>
    )
}

export default Pokedexcard