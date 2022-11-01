import { useEffect, useState } from 'react';
import { useParams, useNavigate} from 'react-router-dom';
import api from '../../services/api';
import './styles.css';
import{toast} from 'react-toastify';
import TopLogo from '../../components/TopLogo';
import { Link } from 'react-router-dom';
import Footer from '../../components/Footer';

function Filmes(){
    const {id} = useParams();
    const [filme, setFilme] = useState({});
    const navigate = useNavigate();
    const [headerTopBlack, setHeaderTopBlack] = useState(false);

    useEffect(() => {

        async function loadFilme(){
            const response = await api.get(`movie/${id}`,{
                params:{
                    api_key:'2078d068789908483254ee34ad1e87d6',
                    language:'pt-BR',
                    page: 1,
                }
            })
            .then((response) =>{               
                setFilme(response.data)
                
            })
            .catch(() =>{
                console.log('Filme não encontrado')
                navigate('/',{replace: true});
                return;
            })
           
            
        }
        loadFilme()

        return() =>{
            console.log('Componente foi desmontado')
        }
    },[navigate, id]);

    const salvarFilme = () =>{
       const minhaLista = localStorage.getItem('@filmeDom');
        let filmesSalvos = JSON.parse(minhaLista) || [];

        //ver se há files duplicados
        const hasFilme = filmesSalvos.some((filmeSalvo) => filmeSalvo.id === filme.id);

        if(hasFilme){
           toast.warn('Esse filme já está na sua lista');
            return;
        }

        filmesSalvos.push(filme);
        localStorage.setItem('@filmeDom', JSON.stringify(filmesSalvos));

        toast.success('Filme salvo com sucesso!')
    }

    useEffect(()=> {
        window.addEventListener('scroll', ()=>{
            setHeaderTopBlack(window.scrollY >100)
        });
        
    }, []); 

    function zeroLeft(num){
        return num > 10 ? num : `0${num}`
    }

    function formatDate(filmes){        
        let month = zeroLeft(filmes.getMonth() + 1);
        let year = filmes.getFullYear();
        return `${month}/${year}`
    }
   
    let filmes =  new Date(filme.release_date);
    let datas = formatDate(filmes);
       console.log(filme)

    return(
        <>
         
        <TopLogo black={headerTopBlack} />     
              
       
        <div className='filme-info' > 
                       
            <img className='poster' src={`https://image.tmdb.org/t/p/original/${filme.poster_path}`} alt={filme.title}/>
            <div className='subtitulo'>
                <h2 className='title--info'>{filme.title}</h2>  
                <div className='resumo'>{filme.overview}
                    <div className='info'>
                        <span className='datas'>{datas}</span>
                        <strong className='voto'>Avaliação: {filme.vote_average}</strong>
                        <a target='blank' rel='external' href={`https://youtube.com/results?search_query=${filme.title} Trailer `} className='trailler'>Trailler</a>
                        <div onClick={salvarFilme} className='salvar'>Salvar</div>
                        <div className="voltar">
                            <Link className='voltar' to='/'>Voltar</Link>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
        <Footer />
        </>
    )
}
export default Filmes