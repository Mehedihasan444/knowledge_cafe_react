import PropTypes from "prop-types";
const Bookmark = ({bookMark}) => {
const {title}=bookMark;
    return (
        <div className="bg-white rounded-md p-5 my-3">
            <h1 className='text-lg font-semibold'>{title}</h1>
        </div>
    );
};
Bookmark.prototype = {
    bookMark: PropTypes.object.isRequired,
   
}
export default Bookmark;