import './App.css';
import Header from './components/header/Header.jsx'
import {Router } from './router/index'
import Footer from './components/Footer.jsx'
import NavBar from './components/header/NavBar.jsx'

function App() {
return (
  <div className="App" style={{backgroundImage: "url('./mainBg.jpg')"}}>
    <div>
      <Header />
      <NavBar/>
      <div id="BodyWrapper" className='BodyWrapper'>
        <Router />
      </div>
      <Footer /> 
    </div>
  </div>
);
}

export default App;
