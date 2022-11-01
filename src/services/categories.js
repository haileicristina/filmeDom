import axios from 'axios';
import api from '../services/api';


const API_KEY = '2078d068789908483254ee34ad1e87d6';
const API_BASE = `https://api.themoviedb.org/3/`;



export const getMovies = async () =>{
  {
     
    return [
        {
            name: 'trending',
            title: 'Em alta',
            path: await baseApi(`/trending/all/week?language=pt-BR&api_key=${API_KEY}`),
            isLarge: true
        },
        {
            name: 'originals',
            title: 'Originais Netflix',
            path: await baseApi(`/discover/tv?with_networks=213 &api_key=${API_KEY}`),
            isLarge: false
        },
        {
            name: 'topRated',
            title: 'Populares',
            path: await baseApi(`/movie/top_rated?language=pt-BR&api_key=${API_KEY}`),
            isLarge: false
        },
        {
            name: 'comedy',
            title: 'Comédias',
            path: await baseApi(`/discover/tv?with_genres=35&api_key=${API_KEY}`),
            isLarge: false
        },
        
        {
            name: 'documentaries',
            title: 'Documentários',
            path: await baseApi(`/discover/tv?with_genres=99&api_key=${API_KEY}`),
            isLarge: false
        },
    ];
}

}

export const baseApi = async(endpoint) => {
    try{
    const req = `${API_BASE}${endpoint}`;    
    const infos = await axios.get(req);
    const movies = infos.data.results;
   // console.log('Teste Infos',infos.data.results);   
    return movies;
    } catch(error){
        console.log(error);
    }
    
}