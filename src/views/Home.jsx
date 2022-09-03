import Post from '../components/Post.jsx'
import React, { useEffect , useState } from 'react';
import ViewPostModal from '../components/viewPostModal.jsx';
import {backendLink} from '../links.js'
let url = `${backendLink}/posts.php`;

function Home() {
    const [allPosts, setAllPosts] = useState([]);
    const [postData, setPostData] = useState([]);
    // const [limit, setLimit] = useState(Math.ceil(document.documentElement.scrollHeight / 700));
    const [limit, setLimit] = useState(100);
    const [maxLimit, setMaxLimit] = useState(0);

// function onScroll() { 
//     if(window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 10 && limit < maxLimit ) {
//         setLimit(limit + 1);
//         window.removeEventListener('scroll', onScroll); 
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
    fetch(url , requestOptions)
    .then(response => response.json())
    .then(data => 
        { setMaxLimit(data.maxLimit); 
        setAllPosts(data.posts);}
    );
    
    // window.addEventListener('scroll',onScroll);
    // window.addEventListener('resize', onResize);
    
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
    //     fetch(url , requestOptions)
    //     .then(response => response.json())
    //     .then(data => 
    //         {
    //             console.log(data.maxLimit)
    //             setMaxLimit(data.maxLimit);
    //             setAllPosts(data.posts);
               
    //         }
    //     );
        
    //     window.addEventListener('scroll',onScroll);
    //     window.addEventListener('resize', onResize);
        
    // }, [limit,maxLimit]);

 
    
    // function onResize() {
    //     window.removeEventListener('resize', onResize); 
    //     let howManyInTotalSouldBe = Math.ceil(document.documentElement.scrollHeight / 700);
    //     console.log('maxlimit is ', maxLimit)
    //     // maLimit Problem
    //     if(howManyInTotalSouldBe > limit && limit < maxLimit ) {
    //         console.log('test',howManyInTotalSouldBe , limit,maxLimit)
    //         setLimit(howManyInTotalSouldBe);  
    //     }
    //     window.addEventListener('resize', onResize);
      
    // }
    return (
        <div>{
             
       }
            <ViewPostModal postData = {postData} />
            <div style={{display: 'flex', flexWrap : 'wrap'}}>
                
                {allPosts.map((post, index) => {
                    return (
                        <Post 
                            key = {index}
                            author= {post.user} 
                            date={post.createdAt} 
                            img={post.imgLink} 
                            header={post.header} 
                            body= {post.body}
                            setPostData={setPostData}/>
                    )
                })}    
            </div>
        </div>
    )
}

export default Home;