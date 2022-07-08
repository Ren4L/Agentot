import '../Static/Static.css';
import Carousel from './Carousel';
import './Permissions.css';

export default function Permissions(){
    return(
        <div className='PermissionsCont' id='Permissions'>
            <div className='PermissionsName'>
                <img src={require('../Static/left.png')} alt='Left' style={{marginRight:'3%', width:'25vw'}}/>
                <div>РАЗРЕШЕНИЯ</div>
                <img src={require('../Static/right.png')} alt='Right' style={{marginLeft:'3%', width:'25vw'}}/>
            </div>
            <Carousel/>
        </div>
    )
}