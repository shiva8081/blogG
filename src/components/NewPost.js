import React from 'react'

export const NewPost = ({posttitle,setposttitle,postbody,setpostbody,handlesubmit}) => {
  return (
    <div className='Newpost '>
    <h2 className='my-5 '>NEW POST</h2>
    <form onSubmit={handlesubmit} className='flex flex-col'>
      <label htmlFor="posttitle"   >Title:</label>
      <input className='bg-slate-300 border-2 border-black' type='text' value={posttitle} onChange={(e)=>setposttitle(e.target.value)} required  />
      <label htmlFor="postbody" >Body:</label>
      <textarea className='bg-slate-300 border-2 border-black' type='text' value={postbody} onChange={(e)=>setpostbody(e.target.value)} required />
      <button className='mx-4 my-4 bg-red-500 w-[10rem] ' type='submit'>submit</button>
    </form>
    </div>
  )
}
