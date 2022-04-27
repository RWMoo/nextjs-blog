import React, { useEffect } from "react";

const Posts = () => {
  useEffect(() => {
    (async () => {
      const res = await fetch("/api/posts/master-the-skills-of-technology-and-be-successful")
      const post = await res.json()
      console.log(post);
    })()
  }, [])
  return (
    <div>
      <p>posts</p>
    </div>
  );
};

export default Posts;