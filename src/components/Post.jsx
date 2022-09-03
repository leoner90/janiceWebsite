import './post.scss'
import {textSpliter} from '../textSpliter.js'
import {backendImgLink} from '../links.js'
import { faMagnifyingGlassPlus, faBlog,faUserGraduate} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState , useEffect } from "react";

function Post(props) {
    const [imagesAreLoaded, setImagesAreLoaded] = useState(false);
    let url = `${backendImgLink + props.img}`;
    let ImgStyle =  {background: `url(${url})`}
 
   useEffect(() => {
    const img = new Image()
    img.src = url
    img.onload = () => setImagesAreLoaded(true)
  }, [url])

   if(props.img === '') {
    ImgStyle =  {display : 'none'}
   }

   function fontAwesome(value,className) {
        return <FontAwesomeIcon className={className} icon={value} /> 
    }

   

   function readMore(props) {
    props.setPostData(props);
    let el = document.getElementById('viewPostModalWrapper');
    el.style.display = "block";   
    const body = document.querySelector("body");
    body.style.overflow = "hidden";
    el.scrollTo({ top: 0 });
   }

    return (
        <div className="PostWrapper">
            <button className='readMoreBtn' onClick={()=> readMore(props)}>
                {fontAwesome(faMagnifyingGlassPlus,'readMoreAwesomeIcon')}
                READ MORE
            </button>
            <h1 className='PostHeader'>
                {fontAwesome(faBlog,'postHeaderAwesomeIcon')}
                {props.header}
            </h1>

            <div className='contentWrapper'  style={{display: 'flex'}}>
                <div className={imagesAreLoaded ? 'PostImage' : 'imgLazyLoader' } style={imagesAreLoaded ? ImgStyle: {}}></div>
                <div className="PostContent">
                    <div className='PostBody masked-overflow'>
                        {textSpliter(props.body , '\n')}
                    </div>
                </div>
            </div>

            <div className='PostSignature'>
                <div className='Postdate'>Date: {props.date}</div>
                <div className='author'> {fontAwesome(faUserGraduate,'authorAwesomeIcon')} {props.author}</div>
            </div>
        </div>
    )
}

export default Post;