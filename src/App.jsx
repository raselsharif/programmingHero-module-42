import { useState } from "react";
import "./App.css";
import Blogs from "./assets/components/Blogs/Blogs";
import BookMark from "./assets/components/BookMark/BookMark";
import Header from "./assets/components/Header/Header";

function App() {
  const [bookmarks, setBookmarks] = useState([]);

  const handleBookmarks = (blog) => {
    const newBookmarks = [...bookmarks, blog];
    setBookmarks(newBookmarks)
  };
  return (
    <>
      <Header></Header>
      <main className="md:flex container mx-auto py-6 gap-8">
        <Blogs handleBookmarks={handleBookmarks}></Blogs>
        <BookMark bookmarks={bookmarks}></BookMark>
      </main>
    </>
  );
}

export default App;
