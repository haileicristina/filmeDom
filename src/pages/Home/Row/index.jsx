import { useState } from "react";
import {Link} from 'react-router-dom';
import './styles.css';
import { CaretLeft, CaretRight } from "phosphor-react";

const Row = ({title, path, isLarge}) =>{
    
    const [scrollx, setScrollx] = useState(0);
   

    
   const handleLeftArrow = () => {
    let x = scrollx + Math.round(window.innerWidth / 2);
    if(x > 0){
        x = 0;
    }
    setScrollx(x);
   }
   const handleRightArrow = () => {
    let x = scrollx - Math.round(window.innerWidth / 2);
    let listW = path.length * 250;
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
            <div className="movie-right" onClick={handleRightArrow }>
                <CaretRight size={50} weight='bold'/>
            </div>

           
            <div className="row-cards" style={{
                marginLeft: scrollx,
               // width: movies.length * 150
            }}>
                
                    {path.length > 0 && path?.map((movie)=>{
                        
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