import { Link, useLoaderData } from "@remix-run/react";
import { getProducts } from "~/models/guitars.server"
import { getPosts } from "~/models/post.server";
import { getCourse } from "~/models/course.server";
import ProductPreview from "~/components/productpreview"
import PostsPreview from "~/components/postspreview"
import Course from "~/components/course"
import styles from "~/styles/index.css"
import stylesCourses from "~/styles/course.css"
import stylesBlog from "~/styles/blog.css"




export async function loader( {params} ) {
  const [products, post, course] = await Promise.all([
    getProducts(),
    getPosts(),
    getCourse()
  ])

  return {
    products: products.data,
    post: post.data,
    course: course.data.attributes
  }
}

export function meta(){
  return {
    title: 'GuitarLA - Guitar Store',
    description: 'Guitar store, sell, sells, selling'
  }
}

export function links(){
  return[
    {
      rel: 'stylesheet',
      href: styles
    },
    {
      rel: 'stylesheet',
      href: stylesCourses
    },
    {
      rel: 'stylesheet',
      href: stylesBlog
    }
  ]
}

function Index() {


  const {products, post, course} = useLoaderData();
  const first3products = products.slice(0,3);
  const first3posts = post.slice(0,3);

  return (
  <>
    <main className="">
      <h2 className="heading">Welcome to GuitarLA</h2>        
      
      <div className="container">
        <h3 className="section-heading">Check our guitars in the store</h3>
        <div className="product-container">
          {first3products?.map( (product) => (
            <ProductPreview
              key={product.id}
              product={product}>
            </ProductPreview>
          ))}
        </div>

        <div className="sectionlink-container">
          <Link className="sectionlink" to="/products">GO TO STORE</Link>
        </div>
      </div>
    </main>

      
      <Course
        course={course} />

      <PostsPreview 
        posts={first3posts}/>
  </>
  )
}

export default Index
