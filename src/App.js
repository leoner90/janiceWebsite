import './App.css';
import Header from './components/header/Header.jsx'
import Router from './router/index'
import Footer from './components/Footer.jsx'
function App() {
  return (
    <div className="App">
      <Header />
      <div className='BodyWrapper'>
        <Router />
      </div>
      <Footer />
    </div>
  );
}

export default App;
