import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import '../Home/home.css'

function Home (){
    return(
        <>
            <h1>Seja Bem-vindo a Pokedex</h1>
            <img className='imagemesquerda' src='https://img1.picmix.com/output/stamp/normal/5/9/0/3/1913095_05c95.gif'></img>
            <br></br>
            <div className='botoes'>
                <button>POKEDEX</button>
                <button>JOGOS DE PLATAFORMA</button>
            </div>
        </>
    )
}

export default Home