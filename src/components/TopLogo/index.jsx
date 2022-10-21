import './styles.css';
import {Link} from 'react-router-dom';
import { UserCircle } from 'phosphor-react';

const TopLogo = ({black}) =>{
    return(
        <header className={black ? 'black' : ''}>
            <div className="top--logo">
            <Link className='text--logo' to='/'>Filme Dom</Link>
            </div>
            <div className="top--user">
                <UserCircle size={35}/>
            </div>
        </header>
    )
}
export default TopLogo