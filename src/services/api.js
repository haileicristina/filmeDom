import axios from 'axios';
//Base_URL:https://api.themoviedb.org/3
//URL: /movie/now_playing?api_key=2078d068789908483254ee34ad1e87d6&language=pt-BR


const api = axios.create({
    baseURL: `https://api.themoviedb.org/3/`
});
   
export default api;


