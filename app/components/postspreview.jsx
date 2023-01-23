import { Link } from "@remix-run/react"
import Post from "~/components/post"

function PostsPreview({posts}) {

  return (
    <section>
        <div className="container">
        <h3 className="section-heading">Want to know more?</h3>
        <div className="product-container">
        {posts?.map( (post) => (
            <Post 
              key={post.id}
              post={post.attributes}/>
          ))}
        </div>

        <div className="sectionlink-container">
          <Link className="sectionlink" to="/blog">GO TO BLOG</Link>
        </div>
      </div>
    </section>
  )
}

export default PostsPreview
