import { useEffect, useState } from 'react';
import './styles.css';
import { Link } from 'react-router-dom';
import { CaretLeft, CaretRight, Trash } from 'phosphor-react';
import {toast} from 'react-toastify';
import TopLogo from '../../components/TopLogo';
import Footer from '../../components/Footer';


const Favoritos = () => {
    const [filmes, setFilmes] = useState([]);
    const [headerTopBlack, setHeaderTopBlack] = useState(false);    
    const [scrollx, setScrollx] = useState(0);

   

    useEffect(() => {
        const minhaLista = localStorage.getItem('@filmeDom');

        setFilmes(JSON.parse(minhaLista) || []);
    }, [])

    const excluirFilme = (id) => {
        let filtrarFilmes = filmes.filter((filme) =>{
            return (filme.id !== id)
        })
        setFilmes(filtrarFilmes);
        localStorage.setItem('@filmeDom', JSON.stringify(filtrarFilmes))
        toast.success('Filme excluído com sucesso!')
    }

    useEffect(()=> {
        window.addEventListener('scroll', ()=>{
            setHeaderTopBlack(window.scrollY >100)
        });
        
    }, []); 

    //scrool dos filmes
    const handleLeftArrow = () => {
        let x = scrollx + Math.round(window.innerWidth / 2);
        if(x > 0){
            x = 0;
        }
        
        setScrollx(x);
       }
       const handleRightArrow = () => {
        let x = scrollx - Math.round(window.innerWidth / 2);
        let listW = filmes.length * 250;
        if((window.innerWidth - listW) > x){
            x = (window.innerWidth - listW) - 60;
        }
        if(!filmes || filmes.length < window.innerWidth -listW){
            x = 0;
        }
        setScrollx(x);
    }

    return(
        <>
       
         <TopLogo black={headerTopBlack} />
         
        <div className="container--favorites">

            <div className='topo--favoritos'>                       
                <div className="favorites-left" onClick={handleLeftArrow}>
                    <CaretLeft size={50} weight='bold'/>
                </div>
                <div className="favorites-right" onClick={handleRightArrow}>
                    <CaretRight size={50} weight='bold'/>
                </div>
                
                <h2 className='title--destaque'>Meus favoritos</h2> 
                <div className='meus-filmes' style={{
                    marginLeft: scrollx,
                // width: movies.length * 150
                }}>
                    
                
                    {filmes.length == 0 && <span className='semFilmes'>Você não possui nenhum filme salvo :( </span>}          
                
                
                    <ul>
                        {filmes.length > 0 && filmes.map((filme) =>{
                            return(
                            
                                <li key={filme.id}>
                                    <img className='posterFav' src={`https://image.tmdb.org/t/p/original/${filme.poster_path}`} alt={filme.title}/>
                                    <div className='title--favoritos'>{filme.title}</div>
                                    <div className='detalhes'>
                                    <Link to={`/filme/${filme.id}`} className='ver--detalhes'>Ver detalhes</Link>
                                    <Trash onClick={() => excluirFilme(filme.id)} className='excluir'size={30} />
                                    </div>
                                </li>
                            
                            )
                        })}
                    </ul>
                </div>
            </div>
        </div>
        <Footer />
        </>
    )
}
export default Favoritos