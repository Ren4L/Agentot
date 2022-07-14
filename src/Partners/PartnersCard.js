import './Partners.css';
import '../Static/Static.css';

export default function PartnersCard(props){
    return(
        <div className='PartnersCard'>
            <div style={{backgroundImage: `url('${props.img}')`, backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize:'contain',width:'80%', height:'80%'}}/>
        </div>
    )
}