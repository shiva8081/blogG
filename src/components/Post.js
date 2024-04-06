import React from 'react'
import { Link } from 'react-router-dom'

export const Post = ({post}) => {
  return (
    <div>
        <Link to={`/post/${post.id}`}>
            <h2>{post.title}</h2>
            <p>{post.datetime}</p>
        </Link>
        <p>{post.length<25?post.body:`${post.body.slice(0,25)}...`}</p>
    </div>
  )
}
