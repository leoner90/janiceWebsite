import Logo from './Logo.jsx'
import './css/header.scss'

function Header () {
    return (
        <div className='HeaderWrapper' style={{backgroundImage: 'url("bg.jpg")'}}>
            <div className='HeaderTopSide'>
                <Logo />  
                <h1 className='MainHeaderTitle'>
                    <span className='mainSlogan'>ENGLISH CLASS EPSOM</span>
                    <small className='slogan'>
                        ENGLISH LANGUAGE COURSES IN SURREY.
                    </small>
                </h1>
                
            </div>
        </div>
    )
}

export default Header;