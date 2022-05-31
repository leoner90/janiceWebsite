import GallerySection from '../components/GallerySection.jsx'
function Gallery() {
    let imgSet= [
        {imgSrc: 'https://englishclassepsom.files.wordpress.com/2018/01/img_4973.jpg'} , 
        {imgSrc: 'https://englishclassepsom.files.wordpress.com/2018/01/img_4971.jpg'} , 
        {imgSrc: 'https://englishclassepsom.files.wordpress.com/2018/01/img_4790.jpg'} , 
        {imgSrc: 'https://englishclassepsom.files.wordpress.com/2014/03/img_2512-3.jpg?w=2000&h='} 


    ]
    return (
        <div> Gallery
            <h1> Year 2022 Walking</h1>
            <div style={{display: 'flex', flexWrap : 'wrap'}}>
                {imgSet.map((imgSrc, index) => {
                    return (
                        <GallerySection imgSrc = {imgSrc.imgSrc} key={index} />
                    )
                })}
            </div>
                
        </div>
    )
}

export default Gallery;