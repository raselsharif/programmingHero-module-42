import { useState } from "react";
import "./App.css";
import Blogs from "./assets/components/Blogs/Blogs";
import BookMark from "./assets/components/BookMark/BookMark";
import Header from "./assets/components/Header/Header";

function App() {
  const [bookmarks, setBookmars] = useState([]);

  const handleBookmarks = (blog) => {
    console.log("bookmark will be added ");
  };
  return (
    <>
      <Header></Header>
      <main className="md:flex container mx-auto py-6 gap-8">
        <Blogs handleBookmarks={handleBookmarks}></Blogs>
        <BookMark></BookMark>
      </main>
    </>
  );
}

export default App;
