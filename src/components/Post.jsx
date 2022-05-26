import './post.scss'
function Post(props) {
    return(
        <div className="PostWrapper">
            <h1 className='PostHeader'>
                {props.header}
            </h1>
            <div className='PostBody'>
                {props.body}
            </div>
        </div>
    )
}

export default Post;