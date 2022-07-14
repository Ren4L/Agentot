import './Services.css';
import '../Static/Static.css'
import ServicesCard from './ServicesCard';
export default function Services(){
    return(
        <div className="ServicesCont" id='Services'>
            <div className='ServecesName'>
                <img src={require('../Static/left.png')} alt='Left' style={{marginRight:'3%', width:'25vw'}}/>
                <div>УСЛУГИ</div>
                <img src={require('../Static/right.png')} alt='Right' style={{marginLeft:'3%', width:'25vw'}}/>
            </div>
            <div className='CardList'>
                <ServicesCard img={require('./Auth.png')} text='Аутсорсинг охраны труда' nav='Outsourcing'/>
                <ServicesCard img={require('./TextBox.png')} text='Аттестация рабочих мест' nav='Attestation'/>
                <ServicesCard img={require('./Fire.png')} text='Пожарная безопасность' nav='Security'/>
                <ServicesCard img={require('./Certificate.png')} text='Испытательная лаборатория' nav='Laboratory'/>
                <ServicesCard img={require('./Tree.png')} text='Экология' nav='Ecology'/>
                <ServicesCard img={require('./Sheild.png')} text='Система управления охраной труда' nav='System'/>
            </div>
        </div>
    )
}