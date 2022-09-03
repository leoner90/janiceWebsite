import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight,faCamera } from '@fortawesome/free-solid-svg-icons';
import {backendImgLinkGallery} from '../../links.js'

let url = `${backendImgLinkGallery}/galleryImages/`;

export function escBtnListener(setPopUpState) {
    function closePopUp(e){
        if(e.key === "Escape"){
            setPopUpState('none');
            document.removeEventListener('keydown', closePopUp );
        }
    }
    document.addEventListener('keydown', closePopUp);
}

export function nextImg(setPopUpImgIndex,popUpImgIndex,allImages,setPopUpImg,setPopUpCurentImgName,imgSections) {
    let newIndex = popUpImgIndex + 1;
    if (newIndex > allImages.length - 1){
        newIndex = 0
        setPopUpImgIndex(0)
    } else {
        setPopUpImgIndex(newIndex)
    }
    
    setPopUpImgIndex(newIndex)
    setPopUpImg( allImages[newIndex].imgLink)
    setPopUpCurentImgName( imgSections.find(x => x.id === allImages[newIndex].imgCategory).sectionName)
}

export function prewImg(setPopUpImgIndex,popUpImgIndex,allImages,setPopUpImg,setPopUpCurentImgName,imgSections) {
    let newIndex = popUpImgIndex - 1;
    if (newIndex < 0){
        newIndex = allImages.length - 1
        setPopUpImgIndex(newIndex)
    } else {
        setPopUpImgIndex(newIndex)
    }
    setPopUpImgIndex(newIndex)
    setPopUpImg( allImages[newIndex].imgLink)
 
    setPopUpCurentImgName( imgSections.find(x => x.id === allImages[newIndex].imgCategory).sectionName)
}

export default function PopUpItself(props){
    return (
        <div className='PopUpWrapper' style={{display: props.popUpState}}>
            <div className='PopContentWrapper'>
                <div className='PopUpCancelBtn' onClick = {()=> props.setPopUpState('none')}> X </div>
                <h1 className='popUpCurentImgName'>   <FontAwesomeIcon className='PopUpHeaderAwesomeIcon' icon={faCamera} /> {props.popUpCurentImgName}</h1>
                <div className='SliderWrapper'>
                    <div className='nextBtn'onClick = {()=> prewImg(props.setPopUpImgIndex,props.popUpImgIndex,props.allImages,props.setPopUpImg,props.setPopUpCurentImgName,props.imgSections)}>
                        <FontAwesomeIcon className='faChevrons' icon={faChevronLeft} />
                    </div>
                        <div className='PopUpImg' style={{backgroundImage: 'url("'+ url + props.popUpImg +'")'}}></div>
                    <div  className='backBtn' onClick = {()=> nextImg(props.setPopUpImgIndex,props.popUpImgIndex,props.allImages,props.setPopUpImg,props.setPopUpCurentImgName,props.imgSections)}>
                        <FontAwesomeIcon className='faChevrons' icon={faChevronRight} />
                    </div>
                </div>
            </div>
        </div>
    )
}