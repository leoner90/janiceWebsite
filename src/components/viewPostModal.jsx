import './viewPostModal.scss'
import {textSpliter} from '../textSpliter.js'
import {backendImgLink} from '../links.js'
import {faUserGraduate,faBlog} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

 
  
function ViewPostModal (props) {
    
    function fontAwesome(value,className) {
        return <FontAwesomeIcon className={className} icon={value} /> 
    }

    //Close Modal
    function closeReadMoremodal() {
        let el = document.getElementById('viewPostModalWrapper');
        el.style.display = "none";  
        const body = document.querySelector("body");
        body.style.overflow = "auto";
    }

    document.addEventListener("keydown", escapePressed, false);

    function escapePressed(e) {
        var keyCode = e.keyCode;
        if(keyCode===27) {
            closeReadMoremodal();
        }
    }
 


   let url = `${backendImgLink + props.postData.img}`;
   let ImgStyle = {};
   let body = '';
   if(props.postData.img) {
     ImgStyle =  {background: `url(${url})`}
     body = textSpliter(props.postData.body, '\n')
   }  

    return (
        <div id="viewPostModalWrapper" className="viewPostModalWrapper">
            <div className='viewPostModalContent'>
                <button className='postViewCloseBtn' onClick={()=> closeReadMoremodal()} > Close</button>
                <h1 className='postViewHeader'>   {fontAwesome(faBlog)}{props.postData.header}</h1>
                <div className='postViewImg' alt="" style={ImgStyle}/>
                
                <div className='postViewBody'>   {body} </div>
                <div className='authorSetion'>
                    <div className='postViewDate'> Date: {props.postData.date}</div>
                    <div className='postViewAuthor'>{fontAwesome(faUserGraduate,'authorAwesomeIcon')} {props.postData.author}</div>
                   
                </div>
                
               
            </div>
        </div>
    )
} 
export default ViewPostModal;