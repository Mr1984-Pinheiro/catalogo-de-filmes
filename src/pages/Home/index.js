import React from 'react'
import { useEffect, useState } from 'react'
import api from '../../services/api'

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
       
      }

      loadFilmes();

  }, []);
  

  return (
    <h1>Home</h1>
  )
}

export default Home