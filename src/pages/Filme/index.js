import React from 'react'
import { useEffect, useState } from 'react'
import { useParams, useNavigate  } from 'react-router-dom'
import './filme.css'

import api from '../../services/api'


const Filme = () => {
  const { id } = useParams();
  const navigate = useNavigate();
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
            navigate("/", { replace: true });
            return;
          })
      }

      loadFilme();

      return ( ) => {

      }
  }, [navigate, id])

  function salveFilm() {
    const minhaLista = localStorage.getItem('@umaChaveQualquer');

    let filmesSalvos = JSON.parse(minhaLista) || [];
    

    const temFilme = filmesSalvos.some( (filmesSalvos) => filmesSalvos.id === filme.id )

    if (temFilme) {
      alert("ESSE FILME JÁ ESTÁ NA LISTA");
      return;
    }

    filmesSalvos.push(filme);
    localStorage.setItem("@umaChaveQualquer", JSON.stringify(filmesSalvos));
    alert("Filme salvo com sucesso. Aleluia!!!")
    
  }

  if (loading) {
      return(
        <div className='filme-loading' >
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
            <button onClick={salveFilm} >Salvar</button>
            <button>
              <a target="blank" rel="external" href={`https://www.youtube.com/results?sp=mAEB&search_query=${filme.title} Trailer`}>
                Trailer
                </a>
            </button>
      </div>

    </div>
  )
}

export default Filme;