import React from 'react'
import {useState} from 'react'
import {useEffect} from 'react'
import NewsItem from './NewsItem'
 
 const Newsboard = ({category}) => {
  const [article,setArticle]=useState([]);

  useEffect(()=>
  {
    let url=`https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=ef85f05e9c5b49749c28b8fb898c6843`
    fetch(url).then((response)=>
    response.json()).then(data=>setArticle(data.articles)).catch((error)=>
    {
      console.log(error)
    })
  },[category])
  return (
    <div>
      <h2 className='text-center'> <span className=' mb-5 ma-2 badge bg-dark text-light'> Leatest News</span> </h2>
      {article.map((news,index)=>{
        return <NewsItem urlToImage={news.urlToImage} url={news.url} title={news.title} key={index} description={news.description} />
      })}
    </div>
  )
}

export default Newsboard