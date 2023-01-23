import { Link } from '@remix-run/react'
import { formatDate } from '~/helpers';

function Post({post}) {

  const {title, content, publishedAt, updatedAt, url, image} = post;



  return (
    <article className="post">
        <img className="blogImg" src={image.data.attributes.formats.medium.url} alt="decorative image of blog" />
        <div className="content">
            <h3>{title}</h3>
            <p className='date'>Published on: {formatDate(publishedAt) }</p>
            <p className="preview">{content}</p>
            <Link className='link' to={`/blog-posts/${url}`}>Read post</Link>
        </div>
    </article>
  )
}

export default Post
