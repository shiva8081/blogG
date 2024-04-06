
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
import { format  } from 'date-fns';






function App() {

  const [posts, setposts] = useState([
    {
      id: 1,
      title: "My First Post",
      datetime: "July 01, 2021 11:17:36 AM",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis consequatur expedita, assumenda similique non optio! Modi nesciunt excepturi corrupti atque blanditiis quo nobis, non optio quae possimus illum exercitationem ipsa!"
    },
    {
      id: 2,
      title: "My 2nd Post",
      datetime: "July 01, 2021 11:17:36 AM",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis consequatur expedita, assumenda similique non optio! Modi nesciunt excepturi corrupti atque blanditiis quo nobis, non optio quae possimus illum exercitationem ipsa!"
    },
    {
      id: 3,
      title: "My 3rd Post",
      datetime: "July 01, 2021 11:17:36 AM",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis consequatur expedita, assumenda similique non optio! Modi nesciunt excepturi corrupti atque blanditiis quo nobis, non optio quae possimus illum exercitationem ipsa!"
    },
    {
      id: 4,
      title: "My Fourth Post",
      datetime: "July 01, 2021 11:17:36 AM",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis consequatur expedita, assumenda similique non optio! Modi nesciunt excepturi corrupti atque blanditiis quo nobis, non optio quae possimus illum exercitationem ipsa!"
    }
  ]);
  const [search, setsearch] = useState('');
  const [searchResult, setsearchResult] = useState([]);
  const [posttitle, setposttitle] = useState('');
  const [postbody, setpostbody] = useState('');
  useEffect(() => {
    const filteredResults = posts.filter((post) =>
      ((post.body).toLowerCase()).includes(search.toLowerCase())
      || ((post.title).toLowerCase()).includes(search.toLowerCase()));

    setsearchResult(filteredResults.reverse());
  }, [posts, search])

  const handlesubmit=(e)=>{
    e.preventDefault();
    const id=posts.length?posts[posts.length-1].id+1:1;
    const datetime = format(new Date(), 'MMMM dd, yyyy pp');
    const newPost = { id, title: posttitle, datetime, body: postbody };
    const allPosts = [...posts, newPost];
    setposts(allPosts);
    setposttitle('');
    setpostbody('');
    navigate('/');

  }
  const navigate = useNavigate();
  const Deletehandle=(id)=>{
    const listitem=posts.filter(post=>post.id!=id);
    setposts(listitem);
    navigate('/');

  }
  return (
    <>
      <Header title="Blog App" />
      <Nav search={search} setsearch={setsearch} />
      <Routes>
        <Route exact path='/' element={<Home posts={searchResult} />} />
        <Route exact path='/post' element={<NewPost handlesubmit={handlesubmit} setposttitle={setposttitle} posttitle={posttitle} postbody={postbody} setpostbody={setpostbody} />} />
        <Route exact path='/post/:id' element={<PostPage posts={posts} Deletehandle={Deletehandle} />} />
        <Route exact path='/about' element={<About />} />
        <Route path='*' element={<Missing />} />
      </Routes>
      <Footer />

    </>
  );
}

export default App;
