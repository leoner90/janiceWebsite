import NavBar from './NavBar.jsx'
import Logo from './Logo.jsx'
import './css/header.scss'
function Header () {
    return (
        <div className='HeaderWrapper' style={{backgroundImage: 'url("bg.jpg")'}}>
            <div className='HeaderTopSide'>
                <Logo />
                <h1 className='MainHeaderTitle'>Epsom English Clasess </h1>
            </div>
            
            <NavBar/>
        </div>
    )
}

export default Header;