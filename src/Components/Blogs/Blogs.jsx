import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";
import PropTypes from 'prop-types'

const Blogs = ({handleAddToBookmark}) => {

   const [blogs, setBlogs] =useState([]);

   useEffect( () =>{
      fetch('blogs.json')
      .then(res => res.json())
      .then(data => setBlogs(data))
   },[])
   return (
      <div className="md:w-2/3">
         <h1 className="text-4xl py-4 ">My Blogs: </h1>
         {
            blogs.map((blog, i) => <Blog key={i} blog={blog}
               handleAddToBookmark ={handleAddToBookmark}
            ></Blog>)

            
         }
         
      </div>
   );
};

Blogs.prototype ={
   handleAddToBookmark:PropTypes.func,
   handleAddToBookmark:PropTypes.func
}
export default Blogs;