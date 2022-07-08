import About from '../About/About';
import Footer from '../Footer/Footer';
import Header from '../Home/Header';
import Partners from '../Partners/Partners';
import Permissions from '../Permissions/Permissions';
import Services from '../Services/Services';
import './App.css';
export default function App() {
  return (
    <div className='Back'>
      <Header/>
      <Services/>
      <Permissions/>
      <Partners/>
      <About/>
      <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d9445.732687408328!2d23.8259625!3d53.7105453!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x32fc4a34567fdbfd!2z0J7QntCeICLQkNCz0LXQvdGC0YHRgtCy0L4g0L7RhdGA0LDQvdGLINGC0YDRg9C00LAg0LMu0JPRgNC-0LTQvdC-Ig!5e0!3m2!1sru!2sby!4v1657304522945!5m2!1sru!2sby" className='Maps' allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" title='GoogleMaps'/>
      <Footer/>
    </div>
  );
}


