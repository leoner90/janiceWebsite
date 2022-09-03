import './gallery.scss'
import {backendImgLinkGallery} from '../links.js'
import {escBtnListener} from '../views/js/galleryPopUp.js'
import { useState , useEffect } from "react";
import { faMapPin, faFingerprint} from '@fortawesome/free-solid-svg-icons'
// import LazyLoading from './js/LazyLoading.js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
let url = `${backendImgLinkGallery}/galleryImages/`;




function GallerySection(props) {
const [imagesAreLoaded, setImagesAreLoaded] = useState(false);
    let src = url + props.imgSrc;
    
 
    useEffect(() => {
      const img = new Image()
      img.src = src
      img.onload = () => setImagesAreLoaded(true)
    }, [src])
 
    function fontAwesome(value,className) {
        return <FontAwesomeIcon className={className} icon={value} /> 
    }

   
 


    function PopUpSlider(imgSrc,imgName){
        escBtnListener(props.setPopUpState);
        props.setPopUpState('block')
        props.setPopUpImg(imgSrc)
        props.setPopUpImgIndex(props.realIndex)
        props.setPopUpCurentImgName(imgName)
    }

 
 

    return(
        <div className=" GallerySection">
            <div className="item ">
            {fontAwesome(faMapPin, 'galleryPinAwesome')} 
                <div className="polaroid">
                    <div className={imagesAreLoaded ? 'polaroidImg' : 'imgLazyLoader' }
                        style={imagesAreLoaded ? {backgroundImage:  'url("'+ url + props.imgSrc + '")'}: {}}  
                        onClick = {()=> PopUpSlider(props.imgSrc,props.imgName)}
                        onLoad={()=> setImagesAreLoaded(true) }
                    />
                    <div className="caption"> {props.imgName} </div>{fontAwesome(faFingerprint, 'fingerprintAwesome')} 
                </div>
            </div>
 
        </div>
    )
}

export default GallerySection;