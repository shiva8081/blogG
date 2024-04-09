import React from 'react'
import { Feed } from './Feed'
const Home = ({ posts, fetcherror, isLoading }) => {
  return (
      <main className="Home">
          {isLoading && <p className="statusMsg">Loading posts...</p>}
          {!isLoading && fetcherror && <p className="statusMsg" style={{ color: "red" }}>{fetcherror}</p>}
          {!isLoading && !fetcherror && (posts&&posts.length ? <Feed posts={posts} /> : <p className="statusMsg">No posts to display.</p>)}
      </main>
  )
}

export default Home;