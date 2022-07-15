import Footer from '../Footer/Footer';
import '../Static/Static.css';
import './ServicesTemplate.css';
import { Link } from 'react-router-dom';

export default function ServicesTemplate(props){
    return(
        <div className='ServicesTemplateCont'>
            <div style={{display:'flex', flexDirection:'row', alignItems:'center', justifyContent:"left", width:'100vw'}}>
                <Link to='/' className='header'>На главную</Link>
                <img src={require('../Static/icon.png')} alt='logo' className='Logo'/>
            </div>
            <div className='ServicesTemplateName'>
                <img src={require('../Static/left.png')} alt='Left' style={{marginRight:'0%', width:'25vw'}}/>
                <div style={{width:'50vw'}}>{props.title}</div>
                <img src={require('../Static/right.png')} alt='Right' style={{marginLeft:'0%', width:'25vw'}}/>
            </div>
            <div className='ServicesTemplateText'>
                {props.text.map((e)=>{
                    return(<div>{e}<br/></div>)
                })}
            </div>
            <Footer/>
        </div>
    )
}