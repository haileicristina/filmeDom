import React from "react";
import { useState, useEffect } from 'react';


import Header from '../../components/Header';
import TopLogo from '../../components/TopLogo';
import Row from "./Row";
import {getMovies} from "../../services/categories";


import {CircleNotch} from 'phosphor-react';
import './styles.css';
import Footer from "../../components/Footer";

function Home(){

    const [featuresMovies, setFeaturesMovies] = useState([]);
    const [movieList, setMovieList] = useState([]);
    const [headerTopBlack, setHeaderTopBlack] = useState(false);
   const [positionCurrent, setPositionCurrent] = useState(0);
  
    useEffect(() => {

        async function getFieatured(){
            const response = await getMovies();
            console.log('Movies',response);
            
           const list = response;   
          
               
           setMovieList(list);
           let originals = list.filter(i => i.name === 'originals');
           const item = originals[0].path;
           let sortMovie = Math.floor(Math.random() * (item.length-1));
          // console.log('Lista',sortMovie)
           let chosen = item[sortMovie];                    
           console.log('Filmes',chosen);
          setFeaturesMovies(chosen);
      
      
    
    const interval = updateMovies();
    return () => clearTimeout(interval);

        }
        getFieatured();
       
    },[positionCurrent]);

    function updateMovies(){
        setTimeout(() => {
            if(positionCurrent + 1 === featuresMovies.length){
                setPositionCurrent(0);
            }else{
                setPositionCurrent(prevCount => prevCount + 1);
            }
           // setFeaturesMovies(infoFilm);
        },11000); 

    }

    useEffect(()=> {
        window.addEventListener('scroll', ()=>{
            setHeaderTopBlack(window.scrollY >100)
        });
        
    }, []); 
       
   
    return(
        <>
        
        <div> 
            <TopLogo black={headerTopBlack} />
       
       <div> 

        {movieList.length <= 0 &&
        <div>
            
        <CircleNotch size={100} color="#de7017" weight="fill" className="loading" />
        </div>
        }

        {featuresMovies &&
        <Header info={featuresMovies} />
    }      
       </div>

       

        {movieList.map((category) =>{
            return (              
                
                 <Row
                    key={category.name}
                    title={category.title}
                    path={category.path}
                    isLarge={category.isLarge}
                />
          
            )
        })}       
       </div> 

       <Footer />

      
       </>
    )
    
}
export default Home