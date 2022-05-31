import './gallery.scss'
function GallerySection(props) {
    return(
        <div className="GallerySection" style={{backgroundImage: 'url("'+props.imgSrc+'")'}}>
                {/* <img src={props.imgSrc} alt=""/> */}
        </div>
    )
}

export default GallerySection;