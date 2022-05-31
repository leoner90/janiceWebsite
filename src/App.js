import './App.css';
import Header from './components/header/Header.jsx'
import Router from './router/index'
import Footer from './components/Footer.jsx'
import NavBar from './components/header/NavBar.jsx'
function App() {
  return (
    <div className="App">
      <Header />
      <NavBar/>
      <div className='BodyWrapper'>
        <Router />
      </div>
      <Footer />
    </div>
  );
}

export default App;
