import './Footer.css';
import '../Static/Static.css';
import Block from './Block';

export default function Footer(){
    return(
        <div className='FooterCont' id='Contact'>
            <div className='BlockList'>
                <Block name='Адрес' textOne='230005, г.Гродно ул. Гаспадарчая,19 каб.316' textTwo='e-mail: agentot@tut.by'/>
                <Block name='Время работы' textOne='Пн-Пт с 8.30 – 17.00, Суббота, Воскресенье – выходной' textTwo=''/>
                <Block name='Директор' textOne='Бандысик Анна Мечиславовна' textTwo='Тел/факс (0152) 44 40 14, gsm: +375292665516'/>
            </div>
            <div className='Copyright'>Copyright 2022. <a href='https://instagram.com/frenron?igshid=YmMyMTA2M2Y=' style={{color:'#898787'}} >Designed by the S&C group</a></div>
        </div>
    )
}