
import { Link } from 'react-router-dom'
function NavBar () {
    return (
        <div className='NavBar'>
            <Link to={'/'} className="flex items-center">HOME | </Link>
            <Link to={'/about'} className="flex items-center">ABOUT | </Link>
            <Link to={'/fees'} className="flex items-center">TERMS AND FEES | </Link>
            <Link to={'/gallery'} className="flex items-center">GALLERY | </Link>
            <Link to={'/contacts'} className="flex items-center">CONTACTS | </Link>
        </div>
    )
}

export default NavBar;