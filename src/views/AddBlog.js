import './Blog.scss';
import { useState } from 'react';

const AddNewBlog = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const handleAddBlog = () => {
        console.log(title, content);
    };
    return (
        <>
            <div className="add-new-container">
                <div className="input-data">
                    <label>Title</label>
                    <input type="text" value={title} onChange={(event) => setTitle(event.target.value)} />
                </div>
                <div className="input-data">
                    <label>Content</label>
                    <input type="text" value={content} onChange={(event) => setContent(event.target.value)} />
                </div>
                <button className='btn-add-new' onClick={() => handleAddBlog()}>Submit</button>
            </div>
        </>
    );
};

export default AddNewBlog;