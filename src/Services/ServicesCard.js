import './Services.css';
import '../Static/Static.css';
import { useNavigate } from 'react-router-dom';
export default function ServicesCard(props){
    const navigate = useNavigate();
    return(
        <div className='Card' onClick={() => navigate(`/${props.nav}`)} style={{cursor:'pointer'}}>
            <img src={props.img} alt='icon' className='CardImg'/>
            <div className='CardText'>{props.text}</div>
        </div>
    )
}