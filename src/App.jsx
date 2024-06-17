import React from "react";
import "./App.css";
import { Portfolio } from "./components/Portfolio";
import { Loader } from "./components/Loader";
import { useImagesLoaded } from "./hooks/useImagesLoaded";
import { Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout";
import { NoMatch } from './components/NoMatch';
import { Blog } from "./components/Blog";
import { BlogPost } from './components/BlogPost';
import { CreatePost } from "./components/CreatePost";
import { PostsList } from './components/PostsList'

function App() {
  const imagePaths = [
    "/images/t-shirt-style.webp",
    "/images/fibo.webp",
    "/images/duffy-girl.webp",
    "/images/nice-figure.webp",
    "/images/one-of-the-firsts.webp",
    "/images/sketch-study.webp",
    "/images/skull-study.webp",
    "/images/some-concept.webp",
    "/images/sketch3.webp",
    "/images/some-style.webp",
    "/images/stick-the-plan-2.webp",
    "/images/lets-go.webp",
  ];
  const imagesLoaded = useImagesLoaded(imagePaths);

  if (!imagesLoaded) {
    return <Loader />;
  }

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Portfolio />} />
          <Route path="blog" element={<PostsList />} />
          <Route path="blog/:slug" element={<BlogPost />} />
          <Route path="create" element={<CreatePost />} />
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
