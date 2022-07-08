import './Carousel.css';
import { useState } from "react";
import perm1 from './165.jpg'
import perm2 from './260.jpg'
import perm3 from './331.jpg'
import perm4 from './2017.jpg'
import perm5 from './2016.jpg'
export default function Carousel(){
    const [index, setIndex] = useState(0);
    const cards = [
        {
            id: "1",
            image: perm1,
        },
        {
            id: "2",
            image: perm2,
        },
        {
            id: "3",
            image: perm3,
        },
        {
            id: "4",
            image: perm4,
        },
        {
            id: "5",
            image: perm5,
        },
    ];
    const [Text, setText] = useState(IndexToText((index) % cards.length));

    function IndexToText(ind){
        switch (ind) {
            case 0:
                return 'Свидетельство об аккредитации на осуществление функций специалиста по охране труда'
            case -4:
            case 1:
                return 'Свидетельство об аккредитации на аттестацию рабочих мест'
            case -3:
            case 2:
                return 'Свидетельство об аккредитации юридического лица'
            case -2:
            case 3:
                return 'Аттестат аккредитации лаборатории'  
            case -1:
            case 4:
                return 'Свидетельство о государственной регистрации'
            default:
                break;
        }
    }

    function SlideLeft(){
        setIndex((index - 1) % cards.length)
        setText(IndexToText((index - 1) % cards.length));
    }

    function SlideRight(){
        setIndex((index + 1) % cards.length)
        setText(IndexToText((index + 1) % cards.length));
    }

    function Slide(e){
        setIndex(parseInt(e.target.getAttribute('value')) % cards.length);
        setText(IndexToText(parseInt(e.target.getAttribute('value')) % cards.length));
    }
    const mod = (n, m) => {
        let result = n % m;
        return result >= 0 ? result : result + m;
    };
    

    return(
        <div className="CaruselCont">
            <div className="Carousel">
                {cards.map((item, i) => {
                const indexLeft = mod(index - 1, cards.length);
                const indexRight = mod(index + 1, cards.length);
                const indexLeftX2 = mod(index - 2, cards.length);
                const indexRightX2 = mod(index + 2, cards.length);
                let className = "card";
                if (i === index) {
                    className = "card card--active";
                } else if (i === indexRight) {
                    className = "card card--right";
                } else if (i === indexLeft) {
                    className = "card card--left";
                } else if (i === indexRightX2) {
                    className = "card card--rightX2";
                } else if (i === indexLeftX2) {
                    className = "card card--leftX2";
                } else className = "card";

                return (
                    <img
                        key={item.id}
                        className={className}
                        src={item.image}
                        alt="Permission"
                    />
                );
                })}
            </div>
            <div style={{color:'white'}}>{Text}</div>
            <div className='Arrows'>
                <img src={require('./ArrowLeft.png')} alt='ArrowLeft' onClick={SlideLeft} style={{cursor:'pointer'}}/>
                <div className='ellipseCont'>
                    {cards.map((item, i)=>{
                        let className = "ellipse";
                        let ind = index;
                        switch(index){
                            case -4:
                                ind = 1;
                                break;
                            case -3:
                                ind = 2;
                                break;
                            case -2:
                                ind = 3;
                                break;
                            case -1:
                                ind = 4;
                                break;
                            default:
                                break;
                        }
                        if (i === ind)
                            className = "ellipseActive";
                        return <div className={className} key={i} value={i} onClick={Slide}/>
                    })}
                </div>
                <img src={require('./ArrowRight.png')} alt='ArrowRight' onClick={SlideRight} style={{cursor:'pointer'}}/>
            </div>
        </div>
    )
}