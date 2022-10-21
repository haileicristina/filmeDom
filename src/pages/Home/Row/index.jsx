import { useEffect, useState } from "react";
import {getMovies} from '../../../services/categories';
import './styles.css';
import { CaretLeft, CaretRight } from "phosphor-react";

const Row = ({title, path, isLarge}) =>{
    const [movies, setMovies] = useState([]);
    const [scrollx, setScrollx] = useState(0);
   

    const listFilmes = async(_path)  => {
        try{
            const data = await getMovies(_path);            
            setMovies(data?.results);
            
            
        }
        catch(error){
            console.log('Error list filmes', error)
            
        }
    };

    useEffect(() => {
        listFilmes(path);
       
    }, [path])

    
   const handleLeftArrow = () => {
    let x = scrollx + Math.round(window.innerWidth / 2);
    if(x > 0){
        x = 0;
    }
    setScrollx(x);
   }
   const handleRightArrow = () => {
    let x = scrollx - Math.round(window.innerWidth / 2);
    let listW = movies.length * 100;
    if((window.innerWidth - listW) > x){
        x = (window.innerWidth - listW) - 60;
    }
    setScrollx(x);
   }
   
    return(
        <>
      
       
        <div className="row-container">
            <h2 className="row-header">{title}</h2>
            <div className="movie-left" onClick={handleLeftArrow}>
                <CaretLeft size={50} weight='bold'/>
            </div>
            <div className="movie-right" onClick={handleRightArrow}>
                <CaretRight size={50} weight='bold'/>
            </div>


            <div className="row-cards" style={{
                marginLeft: scrollx,
               // width: movies.length * 150
            }}>
                    {movies.length > 0 && movies?.map((movie)=>{
                        return(
                            <img className={`movie-card ${isLarge && "movie-card-large"}`}
                            key={movie.id}
                            src={`https://image.tmdb.org/t/p/original/${ isLarge ? movie.backdrop_path : movie.poster_path}`}
                            alt={movie.name}
                            />
                        
                        )
                    })}
            </div>
        </div>

        </>

    )
                
}
export default Row