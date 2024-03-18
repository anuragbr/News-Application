import React from 'react'

 const NewsItem = ({description,url,urlToImage,title}) => {
    
  return (
   
        <div className="card d-inline-block my-3 mb-3 text-light bg-dark mx-3 px-2 py-2" style={{ maxWidth:'345px'}}>
        <img src={urlToImage} style={{height:"200px",width:"330px"}} className="card-img-top" />
         <div className="card-body">
         <h5 className="card-title">{title.slice(0,50)}</h5>
        <p className="card-text">{description?description.slice(0,90):"There is no detailed information about the news"}</p>
        <a href={url} className="btn btn-primary">Read more...</a>
         </div>
        </div>
   
  )
}
export default NewsItem