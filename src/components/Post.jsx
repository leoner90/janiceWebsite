import './post.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbTack } from '@fortawesome/free-solid-svg-icons'
function Post(props) {
   let ImgStyle =  {backgroundImage: `url("${props.img}")`}
   if(props.img === '') {
    ImgStyle =  {display : 'none'}
   }
    return(
        <div className="PostWrapper">
           
            <div className='blogTextWrapper'>
                <h1 className='PostHeader'>
                    <FontAwesomeIcon className='faThumbTack' icon={faThumbTack} />
                    {props.header}
                </h1>
                <div  className="PostImage" style={ImgStyle}></div>
                 
                <div className='PostBody'>
                    {props.body}
                </div>
                <div className='PostSignature'>
                    <div>Date: {props.date}</div>
                    <div>Author: {props.author}</div>
                </div>
            </div>
        </div>
    )
}

export default Post;