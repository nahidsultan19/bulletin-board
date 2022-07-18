import React from 'react';

const ArticleList = (props) => {
    const { articleDetail, articleDelete } = props;
    const { id, title, content } = props.article;
    return (
        <div className='card p-10 text-center'>
            <h2>{title}</h2>
            <p>{content}</p>
            <div className='flex justify-center'>
                <button onClick={() => articleDetail(id)} className='btn mt-4 mr-2'>Detail</button>
                <button onClick={() => articleDelete(id)} className='btn mt-4'>Delete</button>
            </div>
        </div>
    );
};

export default ArticleList;