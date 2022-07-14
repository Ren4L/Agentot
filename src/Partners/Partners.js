import './Partners.css';
import '../Static/Static.css';
import PartnersCard from './PartnersCard';
export default function Partners(){
    return(
        <div className="PartnersCont" id='Partners'>
            <div className='PartnersName'>
                <img src={require('../Static/left.png')} alt='Left' style={{marginRight:'0%', width:'25vw'}}/>
                <div style={{width:'50vw'}}>НАШИ ПАРТНЁРЫ</div>
                <img src={require('../Static/right.png')} alt='Right' style={{marginLeft:'0%', width:'25vw'}}/>
            </div>
            <div className='PartnersCardList'>
                <PartnersCard img={require('./dbk.png')} className='CardLine'/>
                <PartnersCard img={require('./gold.png')}/>
                <PartnersCard img={require('./neman.png')} className='CardLine'/>
                <PartnersCard img={require('./typografy.png')} className='CardLine'/>
                <PartnersCard img={require('./bgl.png')}/>
                <PartnersCard img={require('./sinlab.png')}/>
                <PartnersCard img={require('./ump.png')} className='CardLine'/>
                <PartnersCard img={require('./kashan.png')}/>
            </div>
        </div>
    )
}