import React, { useEffect, useState } from 'react';
import ArticleList from './ArticleList';
import { useNavigate } from "react-router-dom";

const ArticleLists = () => {
    const [articles, setArticles] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        fetch('fake.json')
            .then(res => res.json())
            .then(data => setArticles(data))
    }, [])

    const articleDetail = (id) => {
        navigate(`article-detail/${id}`);
        console.log(id);
    }

    const articleDelete = (id) => {
        const deleteItem = articles.filter(article => article.id !== id)
        setArticles(deleteItem);
        console.log(deleteItem);
    }

    return (
        <div>
            <h2 className='text-3xl font-bold'>All Articles</h2>
            <div className='grid grid-cols-1 md:grid-cols-3'>
                {articles.map(article => <ArticleList key={article.id} article={article} articleDetail={articleDetail} articleDelete={articleDelete}></ArticleList>)}
            </div>
        </div>
    );
};

export default ArticleLists;