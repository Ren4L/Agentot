import './Header.css';
import '../Static/Static.css';
import { Link } from 'react-scroll';

export default function NavBar(){
    return(
        <nav>
            <div className='navCont' id='Header'>
                <Link to='Header' smooth={true} duration={500}>Главная</Link>
                <Link to='Services' smooth={true} duration={500}>Услуги</Link>
                <Link to='About' smooth={true} duration={500}>О нас</Link>
            </div>
            <img src={require('../Static/icon.png')} alt='Logo'/>
            <div className='navCont'>
                <Link to='Permissions' smooth={true} duration={500}>Разрешения</Link>
                <Link to='Partners' smooth={true} duration={500}>Наши клиенты</Link>
                <Link to='Contact' smooth={true} duration={500}>Контакты</Link>
            </div>
        </nav>
    )
}