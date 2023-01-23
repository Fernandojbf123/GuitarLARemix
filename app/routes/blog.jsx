import { useLoaderData } from "@remix-run/react";
import { getPosts } from "~/models/post.server";
import Post from "~/components/post";

import styles from "~/styles/blog.css"

export async function loader() {
  const post = await getPosts();
  return post.data;
}

export function meta() {
  return {
    title: 'GuitarLA - Blog',
    description: 'GuitarLA, music blog and product sales'
  }
}


export function links() {
  return[
    {
      rel: 'stylesheet',
      href: styles
    }
  ]
}





function Blog() {

  const posts = useLoaderData();

  return (
    <main className="container">
      <h2 className="heading">Blog</h2>
      <div className="blog">
        {posts.map(post => (
          <Post 
            key ={post.id}
            post={post.attributes}/>
        ))}

      </div>
    </main>
  )
}

export default Blog
