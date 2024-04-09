import React from 'react'
import { useEffect } from 'react'
import {useParams ,Link} from 'react-router-dom'

export const Editpost = ({posts,edittitle,editbody,setedittitle,seteditbody,handleupdate}) => {
    const{id}=useParams();
    const post=posts.find(post=>(post.id).toString()===id);
    useEffect(()=>{
            if (post){
                seteditbody(post.body);
                setedittitle(post.title);
            }
    },[post,seteditbody,setedittitle])
  return (
    
    <div className='Newpost '>
        {/* {edittitle && */}
        <>
    <h2 className='my-5 '>EDIT POST</h2>
    <form onSubmit={(e)=>e.preventDefault()} className='flex flex-col'>
      <label htmlFor="posttitle"   >Title:</label>
      <input className='bg-slate-300 border-2 border-black' type='text' value={edittitle} onChange={(e)=>setedittitle(e.target.value)} required  />
      <label htmlFor="postbody" >Body:</label>
      <textarea className='bg-slate-300 border-2 border-black' type='text' value={editbody} onChange={(e)=>seteditbody(e.target.value)} required />
      <button className='mx-4 my-4 bg-red-500 w-[10rem] ' onClick={() => handleupdate(post.id)}>Submit</button>
    </form>
    </>
{/* } */}
{/* {!edittitle &&
                <>
                    <h2>Post Not Found</h2>
                    <p>Well, that's disappointing.</p>
                    <p>
                        <Link to='/'>Visit Our Homepage</Link>
                    </p>
                </>
            } */}
    </div>
  )
}
