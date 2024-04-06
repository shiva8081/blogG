import React from 'react'
import { Feed } from './Feed'

export const Home = ({posts}) => {
  // console.log(posts);
  return (
    <div className='Home'>
      {posts.length?(<Feed posts={posts} />):(<p style={{marginTop:"2rem"}}> no post to display</p>)}
    </div>
  )
}
 