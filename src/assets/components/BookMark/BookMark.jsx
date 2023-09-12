import DisplayBookmark from "../DisplayBookmark/DIsplayBookmark";

function BookMark({ bookmarks, readTime }) {
    // console.log(readTime);
    return (
        <div className="w-1/4 bg-gray-300 p-4">
            <h2 className="text-3xl border-b-2 mb-5">Reading Time: {readTime} Min</h2>
            <h2 className="text-3xl border-b-2">Bookmarks: {bookmarks.length}</h2>
            {
                bookmarks.map(bookmark => <DisplayBookmark key={bookmark.id} bookmark={bookmark}></DisplayBookmark>)
            }
        </div>
    );
}

export default BookMark;