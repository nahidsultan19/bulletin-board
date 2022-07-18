import React from 'react';

const CreateArticle = () => {
    const handleAddArticle = (event) => {
        event.preventDefault();
        const title = event.target.value;
        const content = event.target.value;
        const Articlecontent = ({ title, content });
        fetch('fake.json', {
            method: 'POST',
            header: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(Articlecontent)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })
    }
    return (
        <div>
            <form onSubmit={handleAddArticle} class="form-control w-full max-w-xs mx-auto">
                <label class="label">
                    <span class="label-text">Article Title:</span>
                </label>
                <input type="text" placeholder="Type here" class="input input-bordered w-full max-w-xs" />
                <label class="label">
                    <span class="label-text">Article Content:</span>
                </label>
                <input type="text" placeholder="Type here" class="input input-bordered w-full max-w-xs" />
                <button className='btn my-5'>Post</button>
            </form>
        </div>
    );
};

export default CreateArticle;