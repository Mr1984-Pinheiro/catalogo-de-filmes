import React from 'react'
import { useEffect, useState } from 'react'
import { useParams  } from 'react-router-dom'
import './filme.css'

import api from '../../services/api'


const Filme = () => {
  const { id } = useParams();
  const [filme, setFilme] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
      async function loadFilme() {
          await api.get(`/movie/${id}`, {
            params: {
              api_key: "9568c474fe45ef2c5626c8dce8a08cbc",
              language: "pt-BR",
              
            }
          })
          .then((response) => {
            setFilme(response.data);
            setLoading(false);
          })
          .catch(() => {

          })
      }

      loadFilme();

      return ( ) => {

      }
  }, [])


  if (loading) {
      return(
        <div className='filme-info' >
          <h1>
            Carregando detalhes do filme...
          </h1>
        </div>
      ) 
  }

  return (
    <div className='filme-info'>
      <h1> {filme.title} </h1>
      <img src={`https://image.tmdb.org/t/p/original/${filme.backdrop_path}`} alt={filme.title} />

      <h3>Sinopse</h3>
      <span>{filme.overview}</span>
      <strong>Avaliação: {filme.vote_average.toFixed(1)} / 10</strong>

      <div className='area-buttons'>
            <button>Salvar</button>
            <button>
              <a href='#'>Trailer</a>
            </button>
      </div>

    </div>
  )
}

export default Filme;