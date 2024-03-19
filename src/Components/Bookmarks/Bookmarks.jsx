import Bookmark from "../Bookmark/Bookmark";

const Bookmarks = ({bookmarks}) => {

   return (
      <div className="md:1/3">
         <h2 className="text-3xl">BookMarks Blogs:({bookmarks.length})</h2>

         {
            bookmarks.map((bookmark, index) => <Bookmark key={'' +bookmark.id + index} bookmark={bookmark}></Bookmark>)
         }

      </div>
   );
};

export default Bookmarks;