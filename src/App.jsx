import Header from "./components/Header/Header";
import Blogs from "./components/Blogs/Blogs";
import Bookmarks from "./components/Bookmarks/Bookmarks";
import "./App.css";
import { useState } from "react";

function App() {
  const [bookMarks, setBookmarks] = useState([]);

  const handleAddToBookmark = (blog_title) => {
    // console.log(blog_title);
    const isExist = bookMarks.find(item=>item.title===blog_title.title);
    if (isExist) {
      alert("Already exit in the bookmark.")
      return;
    }
    else{
      const newBookmarks = [...bookMarks, blog_title];
    setBookmarks(newBookmarks);
    }
  };
  // console.log(bookMarks);

  const [readTime, setReadTime] = useState(0);
 const [titles,setTitles] = useState([]);

  const handleReadTime = (blogTime,title) => {
    const isPresent = titles.find(Title=>Title.title ===title.title);
    if (isPresent) {
      alert("Already marked as read.");
      return;
    }
   else{
    const totalReadTime = readTime + blogTime;
    setReadTime(totalReadTime);
    const newTitles = [...titles,title];
    setTitles(newTitles);
   }
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
