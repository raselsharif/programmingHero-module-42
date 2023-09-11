import PropTypes from "prop-types";

function Blog({ blogs }) {
  console.log(blogs);
  return (
    <div>
      <h1></h1>
    </div>
  );
}

Blog.propTypes = {
  blogs: PropTypes.object.isRequired,
};
export default Blog;
