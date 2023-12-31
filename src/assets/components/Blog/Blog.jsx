import PropTypes from "prop-types";

function Blog({ blog, handleBookmarks, handleReadTime }) {
  // console.log(handleReadTime);
  const {
    id,
    title,
    cover,
    author,
    author_img,
    hashtags,
    reading_time,
    posted_date,
  } = blog;
  return (
    <div className="mt-8">
      <img className="mb-5 w-full" src={cover} alt="" />
      <div className="flex justify-between items-center">
        <div className="flex gap-6 items-center">
          <img className="w-16 h-16" src={author_img} alt="" />
          <div>
            <h3>{author}</h3>
            <p>{posted_date}</p>
          </div>
        </div>
        <div>
          <p>{reading_time} min read</p>
          <button className="bg-red-500 text-white px-2 rounded-md" onClick={() => handleBookmarks(blog)}>Bookmark</button>
        </div>
      </div>
      <h1 className="text-5xl my-6">{title}</h1>
      <p>
        {hashtags.map((hash, idx) => (
          <span key={idx}>
            <a href="">#{hash} </a>
          </span>
        ))}
      </p>
      <button className="bg-red-600 px-4 py-2 text-white mt-2" onClick={() => handleReadTime(reading_time, id)}>Mark As Read</button>
    </div>
  );
}

Blog.propTypes = {
  blog: PropTypes.object.isRequired,
};
export default Blog;
