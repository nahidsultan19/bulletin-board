import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ArticleDetail = () => {
    const { id } = useParams();
    return (
        <div className='w-full mx-auto'>
            <h2>Article Detail {id}</h2>
        </div>
    );
};

export default ArticleDetail;