import {BrowserRouter, Routes, Route} from 'react-router-dom';

import Home from './pages/Home';
import Filmes from './pages/Filmes';
import Favoritos from './pages/Favoritos';





const RoutesApp = () => {
   

    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={ <Home /> } />
                <Route path='/filme/:id' element={ <Filmes /> } />
                <Route path='/favoritos' element={ <Favoritos /> } />
            </Routes>
        </BrowserRouter>
    )

}
export default RoutesApp