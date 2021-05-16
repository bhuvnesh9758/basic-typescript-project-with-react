import React ,{useEffect,useState}from 'react'
import { useParams } from 'react-router'
import axios from 'axios'
interface Istate{
    article:{
    title:string,
    description:string,
    body:string
    }
}
const ViewData=()=>{
    const {id}=useParams<{id:string}>()
    const [article,setArticle]=useState<Istate["article"]>()
    useEffect(() => {
        axios.get(`https://conduit.productionready.io/api/articles/${id}`)
        .then(res=>{setArticle(res.data.article)})
    }, [id])
    const renderData=()=>{
        if(article===undefined)return
        return (<div>
            <h1>{article.title}</h1>
            <span>{article.description}</span>
            <p>{article.body}</p>
        </div>)
    }
    return (
        <div>
            {article!==undefined ? renderData():<h1>Hey {id}</h1>}
        </div>
    )
}
export default ViewData