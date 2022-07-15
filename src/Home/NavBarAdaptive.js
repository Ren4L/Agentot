import './Header.css';
import '../Static/Static.css';
import { Link } from 'react-scroll';

export default function NavBarAdaptive(){
    function Close(){
        document.querySelector('.navContAdaptive').style.right = '-100vw';
    }
    return(
        <nav>
            <img src={require('../Static/icon.png')} alt='Logo'/>
            <img src={require('./Open.png')} alt='Open' style={{width:'30px', cursor:'pointer'}} onClick={() => document.querySelector('.navContAdaptive').style.right = '0vw'}/>
            <div className='navContAdaptive'>
                <div style={{width:'100vw', display:'flex', justifyContent:'right', paddingRight:'10vw', cursor:'pointer'}}>
                    <img src={require('./Close.png')} alt='Close' style={{width:'30px'}} onClick={Close}/>
                </div>
                <Link to='Header' smooth={true} duration={500} onClick={Close}>Главная</Link>
                <Link to='Services' smooth={true} duration={500} onClick={Close}>Услуги</Link>
                <Link to='About' smooth={true} duration={500} onClick={Close}>О нас</Link>
                <Link to='Permissions' smooth={true} duration={500} onClick={Close}>Разрешения</Link>
                <Link to='Partners' smooth={true} duration={500} onClick={Close}>Наши клиенты</Link>
                <Link to='Contact' smooth={true} duration={500} onClick={Close}>Контакты</Link>
            </div>
        </nav>
    )
}