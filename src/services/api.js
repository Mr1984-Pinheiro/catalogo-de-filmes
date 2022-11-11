
// Base da URL: https://api.themoviedb.org/3/
//URL DA API: movie/now_playing?api_key=9568c474fe45ef2c5626c8dce8a08cbc&language=pt-BR

import axios from 'axios'

const api = axios.create({
    baseURL: "https://api.themoviedb.org/3/"
});

export default api;