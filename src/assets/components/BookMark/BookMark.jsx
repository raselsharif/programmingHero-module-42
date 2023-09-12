import DisplayBookmark from "../DisplayBookmark/DIsplayBookmark";

function BookMark({ bookmarks }) {
    // console.log(bookmarks);
    return (
        <div className="w-1/4 bg-gray-300 p-4">
            <h2 className="text-3xl">Bookmarks: {bookmarks.length}</h2>
            {
                bookmarks.map(bookmark => <DisplayBookmark key={bookmark.id} bookmark={bookmark}></DisplayBookmark>)
            }
        </div>
    );
}

export default BookMark;