import React from 'react';

const Blog = ({ blog }) => {
    const { cover, title, author, author_img, posted_date, reading_time } = blog;
    return (
        <div className='py-10 w-3/4'>
            <div className="card bg-base-100 shadow-sm w-full">

                <figure>
                    <img className='w-full'
                        src={cover}
                        alt="image" />
                </figure>
                <div className="author pt-6 flex justify-between">
                    <div className='flex'>
                        <div className="avatar">
                            <div className="w-16 rounded-full">
                                <img src={author_img} />
                            </div>
                        </div>
                        <div className='author-details pl-5'>
                            <h3 className='text-lg text-gray-500 font-semibold'>{author}</h3>
                            <h5 className='text-gray-600'>{posted_date}</h5>
                        </div>
                    </div>
                    <div className='pr-5'>
                        <i class="fa-regular fa-bookmark"></i>
                        <div>Reading time {reading_time} min</div>
                    </div>
                </div>

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