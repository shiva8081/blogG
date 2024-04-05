
import './App.css';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Nav } from './components/Nav';
import { Home } from './components/Home';
import { NewPost } from './components/NewPost';
import { PostPage } from './components/PostPage';
import { About } from './components/About';
import { Missing } from './components/Missing';
import { Route, Routes, useHistory } from 'react-router-dom'
import { useState, useEffect } from 'react';



function App() {
  return (
    <>
      <Header />
      <Nav />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/post' element={<NewPost />} />
        <Route exact path='/post/:id' element={<PostPage />} />
        <Route exact path='/about' element={<About />} />
        <Route path='*' element={<Missing />} />
      </Routes>
      <Footer />

    </>
  );
}

export default App;
