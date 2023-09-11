import PropTypes from "prop-types";

function Blog({ blog }) {
  console.log(blog);
  const {
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
        <p>{reading_time} min read</p>
      </div>
      <h1 className="text-5xl my-6">{title}</h1>
      <p>
        {hashtags.map((hash, idx) => (
          <span key={idx}>
            <a href="">#{hash} </a>
          </span>
        ))}
      </p>
    </div>
  );
}

Blog.propTypes = {
  blog: PropTypes.object.isRequired,
};
export default Blog;
