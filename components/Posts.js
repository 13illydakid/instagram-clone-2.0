// import React from 'react'
import Post from "./Post"
import { useEffect, useState } from "react";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { db } from "../firebase";

// const posts = [
//    {
//       id: '123',
//       username: '13illydakid',
//       userImg: 'https://upload.wikimedia.org/wikipedia/en/thumb/3/3e/Prince_Zuko.jpg/220px-Prince_Zuko.jpg',
//       img: 'https://upload.wikimedia.org/wikipedia/en/thumb/3/3e/Prince_Zuko.jpg/220px-Prince_Zuko.jpg',
//       caption: 'Prince Zuko',
//    },
//    {
//       id: '123',
//       username: '13illydakid',
//       userImg: 'https://upload.wikimedia.org/wikipedia/en/thumb/3/3e/Prince_Zuko.jpg/220px-Prince_Zuko.jpg',
//       img: 'https://upload.wikimedia.org/wikipedia/en/thumb/3/3e/Prince_Zuko.jpg/220px-Prince_Zuko.jpg',
//       caption: 'Prince Zuko',
//    },
// ];

function Posts() {
   const [posts, setPosts] = useState([]);

   // useEffect(() => {
   //    const unsubscribe = onSnapshot(query(collection(db, 'posts'), orderBy('timestamp', 'desc')), (snapshot) => {
   //       setPosts(snapshot.docs);
   //    });
   //    return () => {
   //       unsubscribe();
   //    }
   // }, [db]);
   useEffect(
      () =>
      onSnapshot(
         query(collection(db, 'posts'), orderBy('timestamp', 'desc')),
         (snapshot) => {
         setPosts(snapshot.docs);
      }
      ), [db]);

      // console.log(posts);

   return (
      <div>
         {posts.map((post) => (
            <Post
               key={post.id}
               id={post.id}
               username={post.data().username}
               userImg={post.data().profileImg}
               img={post.data().image}
               caption={post.data().caption}
            />
         ))}
      </div>
   );
}

export default Posts;
