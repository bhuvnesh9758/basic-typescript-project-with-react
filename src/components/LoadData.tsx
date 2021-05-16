import axios from 'axios'
import React,{useEffect,useState} from 'react'
import { Link } from 'react-router-dom'

interface Istate{
    articles:{
        title:string,
        slug:string
    }[]
}
function LoadData() {
    const [articles,setArticles]=useState<Istate["articles"]>([])
    useEffect(()=>{
        axios.get('https://conduit.productionready.io/api/articles?limit=10')
        .then(res=>{setArticles(res.data.articles)})
    },[])

    const renderList=():JSX.Element[]=>{
        return articles.map(article=><li><Link to={`/articles/${article.slug}`}>{article.title}</Link></li>)
    }
    return (
        <div>
            {articles.length? <ul>{renderList()}</ul>:<h1>Loading...</h1>}
        </div>
    )
}

export default LoadData
