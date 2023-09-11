import { useState } from "react";
import { useEffect } from "react";
import Blog from "../Blog/Blog"


const Blogs = () => {
const [blogs, setBlogs] =useState([]);

useEffect(()=>{
fetch('blogs.json')
.then(res => res.json())
.then(data => setBlogs(data))
},[])

    return (
        <div className="md:w-3/4">
            <h2>Blogs: {blogs.length}</h2>
            <div>
                <Blog blogs={blogs}></Blog>
            </div>
        </div>
    );
};

export default Blogs;