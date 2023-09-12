import PropTypes from "prop-types";
import { useState } from "react";
import { FaBookmark } from "react-icons/fa";

const Blog = ({ blog, handleAddToBookmark,handleReadTime }) => {
  const {
    title,
    cover,
    author_img,
    author,
    posted_date,
    reading_time,
    hashtags,
  } = blog;

  const [colorBtn,setColorBtn] = useState(false);

  const handleBtnColor = ()=>{
    const value = true;
    setColorBtn(value);
  }

  return (
    <div className="mb-10 pb-5">
      <img
        src={cover}
        alt={`cover picture of the title ${title}`}
        className="w-full rounded-md"
      />
      <div className="flex justify-between items-center py-5">
        <div className="flex justify-center items-center gap-3">
          <img src={author_img} alt="" className="w-12" />
          <div className="">
            <h1 className="font-bold text-2xl">{author}</h1>
            <small className="text-md font-medium">{posted_date}</small>
          </div>
        </div>
        <div className="flex justify-center items-center gap-2">
          <small className="font-medium text-xl">{reading_time} min read</small>

          <button onClick={() => {handleBtnColor();handleAddToBookmark({ title })}} className={`${colorBtn?'text-purple-600':''}`}>
            <FaBookmark></FaBookmark>
          </button>
        </div>
      </div>
      <h2 className="text-4xl font-bold">{title}</h2>
      <p className="text-gray-400 py-3">
        {hashtags.map((hashtag, idx) => (
          <span key={idx}>
            <a href="">#{hashtag}</a>
          </span>
        ))}
      </p>
      <button onClick={()=>handleReadTime(reading_time,title)} className=" text-purple-500 text-xl font-medium underline">
        Mark as read
      </button>
    </div>
  );
};
Blog.propTypes = {
  blog: PropTypes.object.isRequired,
  handleAddToBookmark: PropTypes.func.isRequired,
  handleReadTime:PropTypes.func.isRequired
};
export default Blog;
