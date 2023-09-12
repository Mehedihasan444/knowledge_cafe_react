import Bookmark from "../Bookmark/Bookmark";

import PropTypes from "prop-types";
const Bookmarks = ({bookMarks}) => {

    return (
        <div className=" bg-gray-300 rounded-md p-5">
            <h1 className="text-2xl font-bold">Bookmarked Blogs : {bookMarks.length}</h1>
          
                 {
                bookMarks.map((bookMark,idx) => 
                <Bookmark key={idx} bookMark={bookMark}></Bookmark>
            )
            } 
            
        </div>
    );
};
Bookmarks.propTypes ={
    bookMarks:PropTypes.array.isRequired,
}
export default Bookmarks;