import React from 'react';

const Blog = ({ blog }) => {
    const { cover } = blog;
    return (
        <div className='py-10'>
            <div className="card bg-base-100 shadow-sm w-full">

                <figure>
                    <img className='w-full'
                        src={cover}
                        alt="image" />
                </figure>

                <div className="card-body">
                    <h2 className="card-title">Card Title</h2>
                    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;