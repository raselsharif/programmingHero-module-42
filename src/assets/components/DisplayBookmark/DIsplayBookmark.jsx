

export default function DisplayBookmark({ bookmark }) {
    const { title } = bookmark;
    return (
        <h2 className="bg-slate-600 p-4 m-4 text-white">{title}</h2>
    )
}
