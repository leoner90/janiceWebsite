import GallerySection from '../components/GallerySection.jsx'
import './css/gallery.scss'
import { useState , useEffect  } from "react";
import { backendLink } from '../links.js'
import PopUpItself  from './js/galleryPopUp.js'
import { faAngleDoubleUp , faCamera , faAngleDoubleDown} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
let backendUrl = `${backendLink}/getGalleryImages.php`;

function fontAwesome(value,className) {
    return <FontAwesomeIcon className={className} icon={value} /> 
}



function Gallery() {
    
    function initialImgLimit() {
        let howManyRows = Math.ceil(document.documentElement.scrollHeight / 400);
        let howManyItemsPerRow = 0;
        if(window.innerWidth > 1500) {
            howManyItemsPerRow = 4;
        } else if(window.innerWidth > 1300){
            howManyItemsPerRow = 3;
        } else {
            howManyItemsPerRow = 1;
        } 
        return howManyRows * howManyItemsPerRow;
    }

    const [popUpState, setPopUpState] = useState('none');
    const [popUpImg, setPopUpImg] = useState('');
    const [popUpImgIndex, setPopUpImgIndex] = useState(0);
    const [selectedOption, setSelectedOption] = useState(0);
    const [allImages, setAllImages] = useState([]);
    const [imgSections, setImgSections] = useState([]);
    const [popUpCurentImgName, setPopUpCurentImgName] = useState('*');
    const [toggleClass, setToggleClass] = useState('none');
    // const [limit, setLimit] = useState(initialImgLimit());
    const [limit, setLimit] = useState(100);
    const [maxLimit, setMaxLimit] = useState(50);

//     function loadMorePosts() {
//     if(window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 10 ) {
//         if(limit < maxLimit) {
//             //reDo DRY
//             let howManyItemsPerRow = 0;
//             if(window.innerWidth > 1500) {
//                 howManyItemsPerRow = 4;
//             } else if(window.innerWidth > 1300){
//                 howManyItemsPerRow = 3;
//             } else {
//                 howManyItemsPerRow = 1;
//             } 
//             setLimit(limit + howManyItemsPerRow);
//             console.log('server call')
//         }
//         window.removeEventListener('scroll', loadMorePosts);
        
//     }
// }

useEffect(() => {
    let formData = new FormData();
    formData.append('limit', limit);
    const requestOptions = {
        method: 'POST',
        mode: "cors",
        enctype: 'multipart/form-data',
        body: formData
    }
    fetch(backendUrl , requestOptions)
    .then(response => response.json())
    .then(data => 
        {
            setAllImages(data.galleryimages);
            setImgSections(data.imgSections);
            // setMaxLimit(data.maxLimit);
        }
    );
    // window.addEventListener('scroll',loadMorePosts);
    
}, []);


    // useEffect(() => {
    //     let formData = new FormData();
    //     formData.append('limit', limit);
    //     const requestOptions = {
    //         method: 'POST',
    //         mode: "cors",
    //         enctype: 'multipart/form-data',
    //         body: formData
    //     }
    //     fetch(backendUrl , requestOptions)
    //     .then(response => response.json())
    //     .then(data => 
    //         {
    //             setAllImages(data.galleryimages);
    //             setImgSections(data.imgSections);
    //             setMaxLimit(data.maxLimit);
    //         }
    //     );
    //     window.addEventListener('scroll',loadMorePosts);
        
    // }, [limit]);




    // useEffect(() => {
    //     fetch(backendUrl)
    //     .then(response => response.json())
    //     .then(data => 
    //         {
    //             setAllImages(data.galleryimages);
    //             setImgSections(data.imgSections)
               
    //         }
    //     );
    //   }, []);

      const currentImgSet = [];
      let realIndex = -1;
 
    return (
        <div className='GalleryWrapper'> 
             <PopUpItself 
                popUpState={popUpState} 
                setPopUpState={setPopUpState}
                popUpImg={popUpImg} 
                setPopUpImg={setPopUpImg} 
                popUpImgIndex={popUpImgIndex}  
                setPopUpImgIndex={setPopUpImgIndex}
                selectedOption={selectedOption}
                allImages= {currentImgSet}
                imgSections={imgSections}
                popUpCurentImgName ={popUpCurentImgName}
                setPopUpCurentImgName={setPopUpCurentImgName}
            />
           
            <div style={{display: 'flex' ,alignItems: 'center', textAlign: 'left', position:'relative',justifyContent: 'right'}}>
            
                <div   className='customSelect' onClick={()=> toggleClass === 'none' ? setToggleClass("block") : setToggleClass('none')}>
                    <div className='selectContentWrapper'  >
                        <p className='selectHeader'>{selectedOption === 0 ? 'ALL' : imgSections.find(x => x.id === selectedOption).sectionName}</p>
                        <p>{toggleClass === 'none' ? fontAwesome(faAngleDoubleDown,'selectArrowDown') : fontAwesome(faAngleDoubleUp,'selectArrowDown')}</p> 
                    </div>
                    <div className='optionsWrapper' style={{display: toggleClass}} >
                        {imgSections.map((section, index) => { 
                            if(allImages.find(x => x.imgCategory === section.id || Number(section.id) === 0) ) {
                                return (
                                    <p key={index} onClick={()=> setSelectedOption(section.id)}>
                                        {fontAwesome(faCamera,'optionAwesome')}
                                        {section.sectionName}
                                    </p>
                                )
                                }   else {
                                    return ''
                                }
                            
                            })}
                    </div>
                </div>
            </div>
            <div style={{display: 'flex', flexWrap : 'wrap'}}>
                {allImages.map((img, index) => {
                   
                    if(img.imgCategory === selectedOption || Number(selectedOption) === 0) {          
                        currentImgSet.push(img);
                        realIndex = realIndex + 1;
                        let imageSection =  imgSections.find(x => x.id === img.imgCategory);
                         
                        
                        return (
                            <GallerySection 
                            index={index}
                            imgSrc = {img.imgLink} 
                            key={index} 
                            realIndex = {realIndex}
                            setPopUpState= {setPopUpState} 
                            setPopUpImg={setPopUpImg}
                            setPopUpImgIndex={setPopUpImgIndex}
                            imgName={imageSection.sectionName}
                            setPopUpCurentImgName= {setPopUpCurentImgName}
                          
                            />
                        )
                    } else {
                       return '';
                    }
                })}
             
            </div>
        </div>
    )
}

export default Gallery;