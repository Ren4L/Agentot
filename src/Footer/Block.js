import './Footer.css';
import '../Static/Static.css';

export default function Block(props){
    return(
        <div className='BlockCont'>
            <div className='BlockName'>{props.name}:</div>
            <div className='BlockText'>{props.textOne}</div>
            <div className='BlockText'>{props.textTwo}</div>
        </div>
    )
}