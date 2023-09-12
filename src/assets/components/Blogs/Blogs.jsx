import { useState } from "react";
import { useEffect } from "react";
import Blog from "../Blog/Blog";

const Blogs = ({ handleBookmarks, handleReadTime }) => {
  const [blogs, setBlog] = useState([]);

  useEffect(() => {
    fetch("blogs.json")
      .then((res) => res.json())
      .then((data) => setBlog(data));
  }, []);

  return (
    <div className="md:w-3/4">
      <h2>Blogs: {blogs.length}</h2>
      <div>
        {blogs.map((blog) => (
          <Blog
            key={blog.id}
            blog={blog}
            handleBookmarks={handleBookmarks}
            handleReadTime={handleReadTime}
          ></Blog>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
