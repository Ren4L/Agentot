import About from '../About/About';
import Footer from '../Footer/Footer';
import Header from '../Home/Header';
import Partners from '../Partners/Partners';
import Permissions from '../Permissions/Permissions';
import Services from '../Services/Services';
import {Routes, Route} from 'react-router-dom'
import './App.css';
import ServicesTemplate from '../ServicesTemplate/ServicesTemplate';

let Outsourcing = [
  'В последнее время аутсорсинг в сфере охраны труда (передача функций службы охраны труда предприятия сторонней организации, которая способна эти функции выполнять в полном объеме, быстрее, качественнее и с меньшими затратами, чем служба данного предприятия) набирает популярность.',
  'Наша организация ООО «Агентство охраны труда г. Гродно» успешно прошла обязательную аккредитацию в Министерстве труда и социальной защиты Республики Беларусь на оказание услуг в области охраны труда (свидетельство Министерства труда и социальной защиты от 01.07.2016 г. № 165).',
  'Более 100 организаций на сопровождении.',
  'Весомыми доводами в пользу аутсорсинга охраны труда с ООО «Агентство охраны труда г.Гродно» являются:',
  '- оптимизация расходов и существенная экономия материальных средств (отсутствие затрат на создание рабочего места, выплату зарплаты, налогов, страховых взносов и т.д.);',
  '- уверенность в профессионализме и непрерывное обслуживание по охране труда;',
  '- гарантия качества выполняемых работ и как следствие повышение производительности Вашей организации;',
  '- взаимодействие с органами, уполномоченными на осуществление контроля (надзора).',
  'Специалисты ООО «Агентства охраны труда г. Гродно» берут на себя решение всех вопросов, связанных с охраной труда на Вашем предприятии и организацию работы по охране труда в соответствии с законодательством Республики Беларусь, и Вы сможете сконцентрироваться на основных видах деятельности Вашей организации.',
  'Наша ценовая политика «мягкая». Стоимость услуг аутсорсинга охраны труда – от 60,00 руб./месяц. Конечная стоимость формируется после проведения бесплатного аудита Вашей организации и предоставления имеющихся документов.',
  'Специалисты нашей организации имеют профильное образование, большой опыт работы и регулярно повышают свою квалификацию, что является залогом долгого и продуктивного сотрудничества.',
  'Помните, что безопасный труд сотрудников – это залог процветания Вашей организации!'
]

let Attestation = [
  'Если Вам необходимо качественно и по разумным ценам провести аттестацию рабочих мест по условиям труда в Вашей организации в соответствии с требованиями законодательства или получить квалифицированную помощь (консультацию), то мы будем рады видеть Вас в числе наших клиентов.',
  'ООО «Агентство охраны труда г. Гродно» (свидетельство об аккредитации на оказание услуг в области охраны труда Министерства труда и социальной защиты Республики Беларусь от 19.12.2017 г. № 260) оказывает услуги по проведению аттестации рабочих мест по условиям труда.',
  'Мы определяем круг подлежащих аттестации рабочих мест и разрабатываем индивидуально для каждой организации-клиента полный пакет документов по аттестации:',
  'Составление карты аттестации рабочего места по условиям труда;',
  'Проведение оценки тяжести и напряженности трудового процесса;',
  'Предоставление оценки условий труда на рабочем месте;',
  'Внесение данных в Модуль электронной формы;',
  'Экспортирование аттестации на сайт Министерства труда и социальной защиты;',
  'Данные по аттестации рабочих мест предоставляем в электронном и бумажном вариантах;',
  'Комплексная гигиеническая оценка условий труда (с оформлением всех необходимых документов);',
  'Организация и проведение замеров вредных факторов на рабочем месте;',
  'Проведение оценки факторов производственной среды.',
  'Все необходимые консультации – БЕСПЛАТНО.',
  'У нас действует система СКИДОК!',
  'Специалисты нашей организации имеют профильное образование, большой опыт работы и регулярно повышают свою квалификацию, что является залогом долгого и продуктивного сотрудничества.',
  'Помните, что безопасный труд сотрудников – это залог процветания Вашей организации!'
]

let Security = [
  'Проводим аудит пожарной безопасности для организаций и учреждений различного назначения.',
  'Разрабатываем организационную документацию по вопросам пожарной безопасности.',
  'Оказываем методическую помощь в организации работы по обеспечению пожарной безопасности.',
  'Наши специалисты имеют соответствующую квалификацию, профессиональный опыт работы и обладают глубокими познаниями действующих нормативно-правовых актов системы противопожарного нормирования и стандартизации.',
  'Мы поделимся своими знаниями и опытом с целью решения возникающих вопросов и проблем в данной сфере.'
]

let Laboratory = [
  'Аттестат аккредитации BY/112 2/4979 от 17.11.2017',
  'Испытательная лаборатория предлагает свои услуги в организации и проведении лабораторных измерений факторов производственной среды с целью:',
  '· производственного лабораторного контроля;',
  '· аттестации рабочих мест по условиям труда (с оформлением всех необходимых документов);',
  '· комплексной гигиенической оценки условий труда (с оформлением всех необходимых документов);',
  '· организации новых рабочих мест;',
  '· открытия предприятия.',
  'Мы оперативно и профессионально окажем услуги по проведению измерений на рабочих местах по следующим направлениям:',
  '· уровни освещенности;',
  '· постоянный и непостоянный шум;',
  '· общая и локальная вибрация;',
  '· электромагнитные и электростатические поля от ВДТ, ЭВМ и ПЭВМ;',
  '· параметры микроклимата.',
  'Наша цель:',
  '· максимальное удовлетворение потребностей субъектов хозяйствования в оказываемых услугах;',
  '· добросовестная профессиональная практика выполнения измерений, техническая оснащенность и компетентность персонала;',
  '· целенаправленное расширение области деятельности на основе передовых технологий и современного оборудования.',
  'Мы обеспечим:',
  '· объективность, достоверность и беспристрастность проводимых измерений;',
  '· высокий уровень организации проводимых работ;',
  '· краткие сроки оформления документов;',
  '· обязательное выполнение обоснованных требований Заказчика.'
]

let Ecology = [
  'Разработка инструкций по обращению с отходами производства;',
  'Разработка нормативов образования отходов производства;',
  'Инвентаризация отходов производства.',
  'Получение разрешений на хранение и захоронение отходов;',
  'Согласование инструкций по обращению с отходами в Комитете природных ресурсов и охраны окружающей среды'
]

let System = [
  'Система управления охраной труда – важная часть управления компанией. Эффективность предприятия, лояльность партнеров, доверие клиентов во многом зависит от того, как организована безопасность труда в Вашей организации. Разработка документов СУОТ проводится в соответствии с СТБ 18001-2009 и других законодательных и нормативно-правовых актов.',
  'Наша компания предлагает работодателям услугу «Подготовка полного пакета документов СУОТ».',
  'идентификация, получение информации, содержащей законодательные и иные обязательные требования, и обеспечение доступа к законодательным и другим применяемым к организации требованиям в области охраны труда;',
  'идентификация опасностей, оценка рисков и мер управления рисками;',
  'установление целей и программ(ы) достижения целей в области охраны труда;',
  'определение компетентности, обеспечение обучения и осведомленности персонала в области охраны труда;',
  'обмен информацией, участие и консультирование работников и иных заинтересованных лиц в области охраны труда;',
  'управление всеми видами документов и данными по охране труда;',
  'идентификация возможных аварийных ситуаций и ответных действий;',
  'осуществление мониторинга и оценка результативности в области охраны труда;',
  'оценка соответствия законодательным и другим требованиям, взятым на себя предприятием в области охраны труда;',
  'расследование несчастных случаев на производстве, профессиональных заболеваний и анализ аварийных ситуаций, несоответствия, корректирующие и предупреждающие действия;',
  'управление записями;',
  'проведение внутренних аудитов СУОТ;',
  'проведение анализа со стороны руководства.',
  'Мы подготовим оптимальный пакет документов СУОТ с учетом специфики Вашей организации, дадим полную и корректную консультацию по ведению данной документации, сэкономим Ваше время, ответим на все Ваши вопросы, связанные с охраной труда.',
  'Если Вы хотите быть уверены и спокойны за безопасность труда на Вашем предприятии, обращайтесь к нам!'
]
export default function App() {
  return (
    <Routes>
      <Route path='/' element={
        <div className='Back'>
          <Header/>
          <Services/>
          <Permissions/>
          <Partners/>
          <About/>
          <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d9445.732687408328!2d23.8259625!3d53.7105453!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x32fc4a34567fdbfd!2z0J7QntCeICLQkNCz0LXQvdGC0YHRgtCy0L4g0L7RhdGA0LDQvdGLINGC0YDRg9C00LAg0LMu0JPRgNC-0LTQvdC-Ig!5e0!3m2!1sru!2sby!4v1657304522945!5m2!1sru!2sby" className='Maps' allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" title='GoogleMaps'/>
          <Footer/>
        </div>
      } />
      <Route path='/Outsourcing' element={<ServicesTemplate title='АУТСОРСИНГ ОХРАНЫ ТРУДА' text={Outsourcing}/>}/>
      <Route path='/Attestation' element={<ServicesTemplate title='Аттестация рабочих мест' text={Attestation}/>}/>
      <Route path='/Security' element={<ServicesTemplate title='ПОЖАРНАЯ БЕЗОПАСНОСТЬ' text={Security}/>}/>
      <Route path='/Laboratory' element={<ServicesTemplate title='ИСПЫТАТЕЛЬНАЯ ЛАБОРАТОРИЯ' text={Laboratory}/>}/>
      <Route path='/Ecology' element={<ServicesTemplate title='ЭКОЛОГИЯ' text={Ecology}/>}/>
      <Route path='/System' element={<ServicesTemplate title='СИСТЕМА УПРАВЛЕНИЯ ОХРАНЫ ТРУДА' text={System}/>}/>
    </Routes>
  );
}


