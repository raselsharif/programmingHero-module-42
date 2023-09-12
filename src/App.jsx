import { useState } from "react";
import "./App.css";
import Blogs from "./assets/components/Blogs/Blogs";
import BookMark from "./assets/components/BookMark/BookMark";
import Header from "./assets/components/Header/Header";

function App() {
  const [bookmarks, setBookmarks] = useState([]);
  const [readTime, setReadTime] = useState(0)

  const handleBookmarks = (blog) => {
    const newBookmarks = [...bookmarks, blog];
    setBookmarks(newBookmarks)
  };

  const handleReadTime = (time, id) => {
    setReadTime(readTime + time)

    // remove bookmarks
    const remainingBookmarks = bookmarks.filter(bookmark => bookmark.id != id)
    setBookmarks(remainingBookmarks)
    // console.log(id);

  }
  return (
    <>
      <Header></Header>
      <main className="md:flex container mx-auto py-6 gap-8">
        <Blogs handleBookmarks={handleBookmarks} handleReadTime={handleReadTime}></Blogs>
        <BookMark bookmarks={bookmarks} readTime={readTime}></BookMark>
      </main>
    </>
  );
}

export default App;
