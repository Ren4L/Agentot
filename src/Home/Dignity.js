import './Header.css'
export default function Dignity(props){
    return(
        <div className='DignityCont'>
            <img src={props.img} alt='Dignity' className='DignityImg'/>
            <div>{props.text}</div>
        </div>
    )
}