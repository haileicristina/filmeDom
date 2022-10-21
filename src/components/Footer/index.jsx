import {BracketsAngle, RocketLaunch} from 'phosphor-react';

const Footer = () => { 
    return(
        <footer style={{
            width: '100vw', display:'flex', alignItems:'center', justifyContent: 'center',
            marginTop: '80px'
            }}>
           <BracketsAngle size={25} />
           Desenvolvido por Hailei Dev  <RocketLaunch size={32} color='#F07B0A' />     
           API do Themoviedb.org
           </footer>
    )
}
export default Footer