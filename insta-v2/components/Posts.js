// import React from 'react'
import Post from "./Post"

const posts = [
   {
      id: '123',
      username: '13illydakid',
      userImg: 'https://upload.wikimedia.org/wikipedia/en/thumb/3/3e/Prince_Zuko.jpg/220px-Prince_Zuko.jpg',
      img: 'https://upload.wikimedia.org/wikipedia/en/thumb/3/3e/Prince_Zuko.jpg/220px-Prince_Zuko.jpg',
      caption: 'Prince Zuko',
   },
   {
      id: '123',
      username: '13illydakid',
      userImg: 'https://upload.wikimedia.org/wikipedia/en/thumb/3/3e/Prince_Zuko.jpg/220px-Prince_Zuko.jpg',
      img: 'https://upload.wikimedia.org/wikipedia/en/thumb/3/3e/Prince_Zuko.jpg/220px-Prince_Zuko.jpg',
      caption: 'Prince Zuko',
   },
];

function Posts() {
   return (
      <div>
         {posts.map((post) => (
            <Post
               key={post.id}
               id={post.id}
               username={post.username}
               userImg={post.userImg}
               img={post.img}
               caption={post.caption}
            />
         ))}
      </div>
   )
}

export default Posts;
