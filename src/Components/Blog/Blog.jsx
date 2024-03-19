import PropTypes from 'prop-types';
import { CiBookmark } from "react-icons/ci";
const Blog = ({blog,handleAddToBookmark}) => {
   const {id,title, cover, author,author_img,posted_date,reading_time,hashtags,description} = blog;
   return (
      <div>
         
         <img className='my-4 rounded-2xl border shadow w-full' src={cover} alt={`Cover picture of the title ${title}`} />
         <div className='flex items-center justify-between'>
            <div className='flex items-center'>
               <img src={author_img} alt="" className='w-12 rounded-lg' />
               <div className='ml-2'>
                  <h4>{author}</h4>
                  <p>{posted_date}</p>
               </div>
            </div>
            <div>
            <p className='flex items-center'>{reading_time} minutes <span onClick={()=>handleAddToBookmark(blog)} className='ml-2 text-2xl cursor-pointer'><CiBookmark /></span></p>

            </div>
         </div>
         <h2 className='text-2xl'>{title}</h2>
         <p>{description}</p>
         <p >
         {
            hashtags.map((hash,inx) => <span key={inx} className='mr-4'><a href='#'>#{hash}</a></span>)
         }
         </p>
         
         <h5 onClick={handleAddToBookmark} className='text-purple-500 underline cursor-pointer'>Mark as read</h5>
      </div>
   );
};
Blog.propTypes = {
   blog: PropTypes.object.isRequired
   
}



export default Blog;