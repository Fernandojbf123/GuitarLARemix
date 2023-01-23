import { getPost } from "~/models/post.server";
import { useLoaderData } from "@remix-run/react"
import { formatDate } from "~/helpers";
import styles from '~/styles/blog.css'

export async function loader({params}) {
  const { postUrl } = params;
  const post = await getPost(postUrl)

  if (post.data.length === 0){
    throw new Response('',{
      status:404,
      statusText: 'Page not found'
    })
  }
  return post
}

export function links(){
  return[
    {
      rel:'stylesheet',
      href: styles,
    }
  ]
}

export function meta({data}) {

  if (!data){
    return{
      title: 'GuitarLA - Page not found',
      description: 'store, sell, sells, selling'
    }
  }

  return {
    title: `GuitarLA - Blog - ${data.data[0].attributes.title}`,
    description: `${data.data[0].attributes.title}, sell, sells, selling`,
    href: `GuitarLA - ${data.data[0].attributes.title}`
  }
}


function PostUrl() {

  const post = useLoaderData()
  const {title, content, image, url, publishedAt} = post?.data[0]?.attributes;

  return (
    <main className="post container">
        <div className="postImg">
          <img  src={image.data?.attributes.url} alt={`image of product ${title}`}/>
        </div>
        <div className="content">
          <h3 className="po">{title}</h3>
          <p className="date">{`Published on: ${formatDate(publishedAt)}`}</p>
          <p className="description">{content}</p>
        </div>

    </main>
  )
}

export default PostUrl
