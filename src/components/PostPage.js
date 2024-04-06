import React from 'react'
import {useParams,Link} from 'react-router-dom'

export const PostPage = ({posts,Deletehandle}) => {
  const{id}=useParams();
  const post=posts.find(post=>(post.id).toString()===id) ;
  return (
    <div className='PostPage'>
      <article>
        {post&&
        <>
        <h2>{post.title}</h2>
        <p>{post.datetime} </p>
        <p>{post.body} </p>
        <button className='border-2 bg-red-500 py-2 px-2 mx-2 my-2' onClick={()=>Deletehandle(post.id)}> Delete post </button>

        </>}
        {!post &&
                    <>
                        <h2>Post Not Found</h2>
                        <p>Well, that's disappointing.</p>
                        <p>
                            <Link to='/'>Visit Our Homepage</Link>
                        </p>
                    </>
                }
      </article>
    </div>
  )
}
