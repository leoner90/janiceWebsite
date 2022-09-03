
import { NavLink } from 'react-router-dom'
import { useState  } from "react";
import   './css/navbar.scss';
import { faBars} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
function fontAwesome(value,className) {
    return <FontAwesomeIcon className={className} icon={value} /> 
}
function NavBar () {
    const [navbarStatus, setNavbarStatus] = useState('');
    function showMobileNavBar() {
        if(window.innerWidth < 800){
            if(navbarStatus !== 'flex'){
                setNavbarStatus('flex')
            } else {
                setNavbarStatus('')
            }
        }
    }
    return (
        <div className='NavBarWrapper'>
               <div className='MenuShowHideBtn'
                        onClick = {()=> showMobileNavBar()}
                    >
                      {fontAwesome(faBars)}
                </div>
            <div className='NavBar' style={{display: navbarStatus}}>
                <div className='MenuShowHideBtn' onClick = {()=> showMobileNavBar()} >
                     {fontAwesome(faBars)}
                </div>
                <NavLink 
                    to={`${process.env.PUBLIC_URL}/`} onClick = {()=> {showMobileNavBar();  window.scrollTo(0, 0);}} >
                       
                        HOME 
                 </NavLink>
                <NavLink 
                    to={`${process.env.PUBLIC_URL}/about`}onClick = {()=> {showMobileNavBar();  window.scrollTo(0, 0);}}> ABOUT 
                </NavLink>
                <NavLink 
                    to={`${process.env.PUBLIC_URL}/fees`}  onClick = {()=> {showMobileNavBar();  window.scrollTo(0, 0);}}>TERMS AND FEES
                </NavLink>
                <NavLink 
                    to={`${process.env.PUBLIC_URL}/gallery`}  onClick = {()=> {showMobileNavBar();  window.scrollTo(0, 0);}}>GALLERY 
                </NavLink>
                <NavLink 
                    to={`${process.env.PUBLIC_URL}/contacts`}  onClick = {()=> {showMobileNavBar();  window.scrollTo(0, 0);}}>CONTACTS
                </NavLink>
            
            </div>
        </div>
  
    )
}

export default NavBar;