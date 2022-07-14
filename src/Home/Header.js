import Dignity from './Dignity';
import './Header.css';
import '../Static/Static.css'
import NavBar from './NavBar';
import NavBarAdaptive from './NavBarAdaptive';
import { useState, useEffect } from 'react';
export default function Header(){
    const [Size, setSize] = useState(window.innerWidth);
    let [Number, setNumber] = useState(0);
    let Client = `Более ${Number} довольных клиентов`;
    let Organization = `${Number > 300 ? 300 : Number} организаций на абонентском обслуживании`
    useEffect(() => {
        let Counter = setInterval(()=>{
            setNumber(Number++);
            if(Number === 1001) clearInterval(Counter);
        }, 1)
    }, []);
    window.addEventListener('resize', (e)=>{setSize(window.innerWidth)})
    return(
        <div>
            {Size < 960 ? <NavBarAdaptive/> : <NavBar/>}
            <div className='Home'>
                <div className='HomeCont'>
                    <div className='homeName'>
                        <img src={require('./left.png')} alt='Left' style={{marginRight:'-7%', width:'25%'}}/>
                        {Size > 500 ? <div>АГЕНСТВО<br/><font color='#FAD881'>ОХРАНЫ</font> ТРУДА</div> : <div>АГЕНСТВО <font color='#FAD881'>ОХРАНЫ</font> ТРУДА</div>}
                        <img src={require('./right.png')} alt='Right' style={{marginLeft:'-8%', width:'25%'}}/>
                    </div>
                    <div className='hrodno'>ГРОДНО</div>
                </div>
                <div className='DignityList'>
                    <Dignity img={require('./Dignity.png')} text={Client}/>
                    <Dignity img={require('./Dignity.png')} text={Organization}/>
                    <Dignity img={require('./Dignity.png')} text='Оказание услуг по всей РБ'/>
                </div>
            </div>
        </div>
    );
}