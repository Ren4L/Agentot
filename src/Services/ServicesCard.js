import './Services.css';
import '../Static/Static.css';
export default function ServicesCard(props){
    return(
        <div className='Card'>
            <img src={props.img} alt='icon' className='CardImg'/>
            <div className='CardText'>{props.text}</div>
        </div>
    )
}