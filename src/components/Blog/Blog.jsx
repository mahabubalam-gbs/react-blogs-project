import React from 'react';

const Blog = ({ blog }) => {
    const { cover, title } = blog;
    return (
        <div className='py-10 w-3/4'>
            <div className="card bg-base-100 shadow-sm w-full">

                <figure>
                    <img className='w-full'
                        src={cover}
                        alt="image" />
                </figure>

                <div className="card-body">
                    <h2 className="card-title text-2xl">{title}</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro assumenda ut ea a facere nisi! Facilis necessitatibus possimus reiciendis eveniet temporibus alias a eius dicta nobis! Laboriosam porro commodi voluptas.</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Mark As Read</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;