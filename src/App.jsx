import Header from "./components/Header/Header";
import Blogs from "./components/Blogs/Blogs";
import Bookmarks from "./components/Bookmarks/Bookmarks";
import "./App.css";
import { useState } from "react";

function App() {
  const [bookMarks, setBookmarks] = useState([]);

  const handleAddToBookmark = (blog_title) => {
    // console.log(blog);
    const newBookmarks = [...bookMarks, blog_title];
    setBookmarks(newBookmarks);
  };
  // console.log(bookMarks);

  const [readTime, setReadTime] = useState(0);
 

  const handleReadTime = (blogTime,title) => {
    const totalReadTime = readTime + blogTime;
    setReadTime(totalReadTime);
    
    const remainingBookmarks = bookMarks.filter((bookmark)=>bookmark.title!==title);
    setBookmarks(remainingBookmarks);
  };
  // console.log(readTime);

  return (
    <>
      <Header></Header>
      <body className="flex gap-5">
        <Blogs
          handleAddToBookmark={handleAddToBookmark}
          handleReadTime={handleReadTime}
        ></Blogs>
        <div className="w-1/3  rounded-md px-5">
          <div className="bg-purple-100 rounded-md p-5 mb-4">
            <h1 className="text-[#6047EC] text-2xl text-center font-bold">Spent time on read : {readTime} min</h1>
          </div>
          <Bookmarks bookMarks={bookMarks} ></Bookmarks>
        </div>
      </body>
    </>
  );
}

export default App;
