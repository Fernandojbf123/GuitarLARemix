import { useLoaderData, useOutletContext } from "@remix-run/react";
import { useState } from "react";
import { getProduct } from "~/models/guitars.server";

import styles from "~/styles/product.css"

export async function loader ({ params }) {
  const { productUrl } = params;
  const product = await getProduct(productUrl)
  if (product.data.length === 0){
    throw new Response('',{
      status: 404,
      statusText: 'Page not found'
    })
  }

  return product
}

export function meta({data}) {

  if (!data){
    return{
      title: 'GuitarLA - Page not found',
      description: 'store, sell, sells, selling'
    }
  }

  return {
    title: `GuitarLA - ${data.data[0].attributes.name}`,
    description: `${data.data[0].attributes.name}, sell, sells, selling`,
    href: `GuitarLA - ${data.data[0].attributes.name}`
  }
}

export function links() {
  return [
    {
      rel:'stylesheet',
      href:styles
    }
  ]
}

function ProductUrl() {

  const product = useLoaderData();
  const {name, price, description, image} = product.data[0].attributes;
  
  const [quantity, setQuantity] = useState(0);
  
  const {AddToCart} = useOutletContext();


  const handleSubmit = e => {
    e.preventDefault();
    if (quantity < 1){
      alert('You must select a quantity')
      return
    }

    const myCartProduct = {
      id: product.data[0].id,
      image: image.data.attributes.url,
      name,
      price,
      quantity
    }

    AddToCart(myCartProduct)
  }


  return (
    
    <main className="container">
      <div className="product-container">
        <img src={image.data.attributes.url} alt={`image of product ${name}`}/>
        <div className="product-content">
          <h3 className="product-name">{name}</h3>
          <p className="description">{description}</p>
          <p className="price">${price}</p>

          <form 
            className="form"
            onSubmit={handleSubmit}>
              <label htmlFor="quantity">Quantity</label>
              <select name="" id="quantity" onChange={e => setQuantity(+e.target.value)}>
                <option value="0">-- Select a number --</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>

              <input className="addToCartButtom" type="submit" value="Add to cart"/>
          </form>


        </div>
      </div>

    </main>
  )
}

export default ProductUrl
