import React from 'react'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import api from '../../services/api'
import "./home.css"

//URL DA API: movie/now_playing?api_key=9568c474fe45ef2c5626c8dce8a08cbc&language=pt-BR

const Home = () => {
  const [filmes, setFilmes] = useState([]);

  useEffect(() => {

      async function loadFilmes() {
        const response = await api.get("movie/now_playing", {
          params: {
            api_key: "9568c474fe45ef2c5626c8dce8a08cbc",
            language: "pt-BR",
            page: 1
          }
        })

       // console.log(response.data.results.slice(0, 10));
       setFilmes(response.data.results);

      }

      loadFilmes();

  }, []);
  

  return (
    <div className='container' >
        <div className='list-film'  >
            {filmes.map((filme) => {
              return(
                <article key={filme.id} >
                  <strong>{filme.title}</strong>
                  <img src={`https://image.tmdb.org/t/p/original/${filme.poster_path}`} alt={filme.title} />
                  <Link to={`/filme/${filme.id}`} >Acessar</Link>
                </article>
              )
            })}
        </div>
    </div>
  )
}

export default Home