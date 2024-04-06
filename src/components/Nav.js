import React from 'react'
import { Link } from 'react-router-dom'

export const Nav = ({search,setsearch}) => {
  return (
    <div className='Nav bg-black flex h-14 justify-center  '>
      <form className='search ' onSubmit={(e)=>e.preventDefault}>
        {/* <label htmlFor='search' >search posts</label> */}
        <input className='border-2'   id='search' type='text' value={search} onChange={(e)=>setsearch(e.target.value)} placeholder='search post' />
      </form>
      <ul className='text-white flex space-x-4  '>
      <li><Link to="/" >Home</Link></li>
      <li><Link to="/post">post</Link></li>
      <li><Link to="/about">About</Link></li>
      </ul>
    </div>
  )
}
