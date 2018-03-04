import React from 'react'


const Blog = ({blog, user, likes}) => (
  <div>
    <p> </p>
    {blog.author}
    <p> </p>
    {blog.url}
    <p> </p>
    {blog.likes} <button onClick={likes}>like</button>
    <p> </p>
    added by {user.name} 
  </div>  

  
)

export default Blog