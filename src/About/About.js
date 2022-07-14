import './About.css';
import '../Static/Static.css';

export default function About(){
    return(
        <div className="AboutCont" id='About'>
            <div className='AboutName'>
                <img src={require('../Static/left.png')} alt='Left' style={{marginRight:'0%', width:'25vw'}}/>
                <div style={{width:'25vw'}}>О НАС</div>
                <img src={require('../Static/right.png')} alt='Right' style={{marginLeft:'0%', width:'25vw'}}/>
            </div>
            <div className='AboutTextCont'>
                <div className='AboutTextContOne'>
                    <div className='AboutTextOne'>ООО «Агентство охраны труда города Гродно» создано в 2016г. с целью оказанию помощи предприятиям по вопросам охраны труда, аттестации рабочих мест, производственному контролю, экологии и пожарной безопасности.</div>
                    <div className='AboutTextTwo'>В агентстве работают высококвалифицированные специалисты, имеющие богатый практический опыт, в работе используются передовые технологии, постоянно обновляется материально-техническая база. Мы активно используем накопленные ресурсы, профессионализм и опыт для дальнейшего развития.</div>
                </div>
                <div className='AboutDirector'>
                    <img src={require('./Director.png')} alt='DirectorImage'/>
                    <div className='AboutTextContTwo'>
                        <div className='AboutTextTwo'>Мы всегда готовы не только оказать услуги, но и проконсультировать по любым вопросам, связанных с деятельностью агентства. С самого начала руководство ставило перед собой цель — обеспечить высокое качество работы, поэтому сегодня в агентстве работают лучшие специалисты. Добросовестные отношения к работе и знание своего дела позволило нашему агентству получить стремительный рост.</div>
                        <div className='AboutTextTwo' style={{marginTop:'5vw'}}>Разработанная Политика агентства состоит в постоянном совершенствовании как самой организации (контроль качества оказанных услуг), так и её сотрудников, чьи знания и профессиональный рост являются достоинством и опорой.</div>
                    </div>
                </div>
                <div className='AboutTextOne AboutFooter'>Высокий профессионализм команды и индивидуальный подход к каждому клиенту является визитной карточкой Агентства охраны труда г. Гродно.</div>
            </div>
        </div>
    )
}