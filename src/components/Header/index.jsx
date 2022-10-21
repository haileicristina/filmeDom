import {Link} from 'react-router-dom';
import './styles.css';
import { Play } from 'phosphor-react';


const Header = ({info}) => { 

  
    function zeroLeft(num){
        return num >=10 ? num : `0${num}`
    }

    function formatDate(dateMovie){
        let month = zeroLeft(dateMovie.getMonth() + 1);
        
        let year = dateMovie.getFullYear();
        return `${month}/${year}`
    }
   
    let dateMovie =  new Date(info.release_date);
    let datas = formatDate(dateMovie);


    
    return(       
       
        <section className='featured' style={
            {
                backgroundImage: `url(https://image.tmdb.org/t/p/original/${info.backdrop_path})`
            }
        }>
           <div className='featured--vertical'>
                <div className='featured--horizontal'>
                    <div className="featured--name">{info.title}</div>
                   
                    <div className="featured--info">
                        <div className="featured--points">{info?.vote_average} pontos </div>
                        <div className="featured--year">{datas}</div>
                        <div className="featured--language">  {info.original_language === 'en'? ' Aúdio: Inglês' : ''}</div>
                    </div>

                    <div className="featured--description">{
                    info?.overview !== undefined && info?.overview.length > 10 ? `${info?.overview.slice(0, 150)}`: 'Não há descrição'
                     }
                    <Link className='featured--mais' to={`filme/${info.id}`}>...mais</Link>
                    </div>
                    <div className="featured-buttons">
                            <Link className='featured--play' to={`filme/${info.id}`}>
                            <Play size={20} className='feature-btPlay' />Play
                            </Link>
                            
                            
                            <Link className='featured--favoritos' to='/favoritos'>Favoritos</Link>
                    </div>
                </div>
           </div>
        </section>
    
    )
   
}
export default Header