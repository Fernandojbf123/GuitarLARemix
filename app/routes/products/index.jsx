import { useLoaderData } from "@remix-run/react"
import { getProducts } from "~/models/guitars.server"
import styles from "~/styles/store.css"
import Productlist from "~/components/product-list"


export function meta() {
  return {
    title: 'GuitarLA - Guitar Store',
    href: 'GuitarLA - Our guitar collection'
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

export async function loader () {
  const guitars = await getProducts()
  return guitars.data
}
function Store() {
  const guitars = useLoaderData();
  
  return (
    <main className="container">
      <h2 className="heading">Our guitar collection</h2>
      
      <Productlist 
        guitars={guitars}/>
      
    </main>
  )
}

export default Store
