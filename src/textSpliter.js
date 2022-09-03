export function textSpliter(text, spliter) {
  let splitedText = text.split(spliter);
  let newText = splitedText.map((i, index) => {
    if(i.length <= 1) {
     return ( <br key={index}/>)
    } else {
      return   (<article className="newLineArticle" key={index}>{i}</article>)
    }
  })
  return newText;    
}

export  function linkSpliter(link,linkName, spliter) {
  let splitedLinks = link.split(spliter);
  let splitedLinkName = linkName.split(spliter);
  let newLinks = splitedLinks.map((link, index) => {
    return ( 
      <div key={index}> 
        <a className='linkStyle ' href={link} target={'_blank'} rel="noreferrer" >
          {splitedLinkName[index]} 
        </a>
      </div>   
    )
  })
  return newLinks;    
}
 