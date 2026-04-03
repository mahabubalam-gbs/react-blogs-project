import React, { useEffect, useState } from 'react';

const Blogs = () => {
    const [blogs, setBlogs] = useState([])

    useEffect(() => {
        fetch("blogs.json")
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, []);


    return (
        <div className='py-10'>
            <h1 className='text-3xl font-bold'>Total Blogs: {blogs.length}</h1>
        </div>
    );
};

export default Blogs;