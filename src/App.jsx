import './App.css'
import './Fonts/anurati-webfont/style.css';
import './Fonts/quick-webfont/stylesheet.css'
import BgVideo from './Components/BgVideo';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';

function App() {

  return (
    <>
      <BgVideo></BgVideo>
      
      <Navbar></Navbar>

      <main>
        <Hero></Hero>
      </main>
    </>
  );
}

export default App