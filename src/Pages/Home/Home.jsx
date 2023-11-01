import '../Home/home.css'

function Home (mostrar){
    return(
        <>
            <h1>Seja Bem-vindo a Pokedex</h1>
            <img className='imagemesquerda' src='https://img1.picmix.com/output/stamp/normal/5/9/0/3/1913095_05c95.gif' alt='imagemPokemon'></img>
            <br></br>
            <div className='botoes'>
                <button onClick={mostrar.showPokedexCard}>POKEDEX</button>
                <button onClick={mostrar.showJogosCard}>JOGOS DE PLATAFORMA</button>
            </div>
        </>
    )
}

export default Home