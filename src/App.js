
import './App.css';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Nav } from './components/Nav';
import { Home } from './components/Home';
import { NewPost } from './components/NewPost';
import { PostPage } from './components/PostPage';
import { About } from './components/About';
import { Missing } from './components/Missing';
import { Route, Routes, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react';
import { format } from 'date-fns';
import api from './api/posts'
import { Editpost } from './components/Editpost';


function App() {

  const [posts, setposts] = useState([]);
  const [search, setsearch] = useState('');
  const [searchResult, setsearchResult] = useState([]);
  const [posttitle, setposttitle] = useState('');
  const [edittitle, setedittitle] = useState('');
  const [postbody, setpostbody] = useState('');
  const [editbody, seteditbody] = useState('');

  useEffect(() => {
    const filteredResults = posts.filter((post) =>
      ((post.body).toLowerCase()).includes(search.toLowerCase())
      || ((post.title).toLowerCase()).includes(search.toLowerCase()));

    setsearchResult(filteredResults.reverse());
  }, [posts, search])

  useEffect(() => {
    const fetchposts = async () => {
      try {
        const response = await api.get('/posts');
        setposts(response.data);
      } catch (err) {
        if (err.response) {
          console.log(err.response.data)
          console.log(err.response.status)
          console.log(err.response.Header)
        } else {
          console.log(`error :${err.message}`);
        }
      }
    }
    fetchposts();
  }, [])

  const handlesubmit = async (e) => {
    e.preventDefault();
    const id = posts.length ? posts[posts.length - 1].id + 1 : 1;
    const datetime = format(new Date(), 'MMMM dd, yyyy pp');
  
    const newPost = { id, title: posttitle, datetime, body: postbody };
    try {
      const response = await api.post('/posts', newPost)
      const allPosts = [...posts, response.data];
      setposts(allPosts);
      setposttitle('');
      setpostbody('');
      navigate('/');
    }
    catch (err) {
      console.log(`error: ${err.message}`)
    }

  }
  const handleupdate= async(id)=>{
    const datetime = format(new Date(), 'MMMM dd, yyyy pp');
      const newPostupdate = { id, title: edittitle, datetime, body: editbody };
    try {
      const response=await api.put(`/posts/${id}`,newPostupdate)
      setposts(posts.map(post=>post.id==id?{...response.data}:post))
      seteditbody('');
      setedittitle('');
      navigate('/')
    } catch (err) {
      console.log(`error:${err.message}`);
    }
  }
  const navigate = useNavigate();
  const Deletehandle = async (id) => {
    try {
      await api.delete(`/posts/${id}`);
      const listitem = posts.filter(post => post.id !== id);
      setposts(listitem);
      navigate('/');
    } catch (err) {
      console.log(`error:${err.message}`)
    }
  }
  return (
    <>
      <Header title="Blog App"  />
      <Nav search={search} setsearch={setsearch} />
      <Routes>
        <Route exact path='/' element={<Home posts={searchResult} />} />
        <Route exact path='/post' element={<NewPost handlesubmit={handlesubmit} setposttitle={setposttitle} posttitle={posttitle} postbody={postbody} setpostbody={setpostbody} />} />
        <Route exact path='/edit/:id' element={<Editpost posts={posts} handleupdate={handleupdate} setedittitle={setedittitle} edittitle={edittitle} editbody={editbody} seteditbody={seteditbody} />} />
        
        <Route exact path='/post/:id' element={<PostPage posts={posts} Deletehandle={Deletehandle} />} />
        <Route exact path='/about' element={<About />} />
        <Route path='*' element={<Missing />} />
      </Routes>
      <Footer />

    </>
  );
}

export default App;
