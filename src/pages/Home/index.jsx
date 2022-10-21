import React from "react";
import { useState, useEffect } from 'react';

import {categories} from '../../services/categories';
import api from '../../services/api';

import Header from '../../components/Header';
import TopLogo from '../../components/TopLogo';
import Row from "./Row";

import {CircleNotch} from 'phosphor-react';
import './styles.css';
import Footer from "../../components/Footer";

function Home(){

    const [featuresMovies, setFeaturesMovies] = useState([]);
    const [headerTopBlack, setHeaderTopBlack] = useState(false);
   const [positionCurrent, setPositionCurrent] = useState(0);
  
    useEffect(() => {

        async function getFieatured(id){
            const response = await api.get(`discover/movie/`,{
                params:{
                    api_key:'2078d068789908483254ee34ad1e87d6',
                    language:'pt-BR',
                    page: 1,
                }
            })
           // console.log(response.data.results);
            
           const list = response.data.results;   
               
       

       let sortMovie = Math.floor(Math.random() * (list.length -1));
       let chosen = list[sortMovie];
       let infoFilm = chosen;
       console.log(infoFilm);
      setFeaturesMovies(infoFilm);
      
      
    
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

        {categories.length <= 0 &&
        <div>
            
        <CircleNotch size={100} color="#de7017" weight="fill" className="loading" />
        </div>
        }

        {featuresMovies &&
        <Header info={featuresMovies} />
        }       
       </div>

       

        {categories.map((category) =>{
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