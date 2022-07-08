import Dignity from './Dignity';
import { Link } from 'react-scroll';
import './Header.css';
import '../Static/Static.css'
export default function Header(){
    return(
        <div>
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
            <div className='Home'>
                <div className='HomeCont'>
                    <div className='homeName'>
                        <img src={require('./left.png')} alt='Left' style={{marginRight:'-7%', width:'25%'}}/>
                        <div>
                            АГЕНСТВО<br/><font color='#FAD881'>ОХРАНЫ</font> ТРУДА
                        </div>
                        <img src={require('./right.png')} alt='Right' style={{marginLeft:'-8%', width:'25%'}}/>
                    </div>
                    <div className='hrodno'>ГРОДНО</div>
                </div>
                <div className='DignityList'>
                    <Dignity img={require('./Dignity.png')} text='Более 400 довольных клиентов'/>
                    <Dignity img={require('./Dignity.png')} text='100 организаций на абонентском обслуживании'/>
                    <Dignity img={require('./Dignity.png')} text='Оказание услуг по всей РБ'/>
                </div>
            </div>
        </div>
    );
}