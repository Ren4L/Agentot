import './Partners.css';
import '../Static/Static.css';

export default function PartnersCard(props){
    return(
        <div className='PartnersCard'>
            <img src={props.img} alt='Partner'/>
        </div>
    )
}