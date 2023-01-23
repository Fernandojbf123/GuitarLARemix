import { useOutletContext } from "@remix-run/react"
import { useState, useEffect } from "react";
import { ClientOnly } from "remix-utils"
import styles from "~/styles/cart.css"


export function meta() {
  return{
    title: "GuitarLA - Shopping cart",
    description: "Product sales, sells, seeling, sell"
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


function cart() {

  const [total, setTotal] = useState(0);

  const { shoppingCart, modifyQuantityInCart, handleDeleteProduct } = useOutletContext();
  
  useEffect (()=> {
    if( shoppingCart.length>0){
      const tmpTotal = shoppingCart.reduce( (total, product) => total + product.quantity*product.price, 0)
      setTotal(tmpTotal)
    } 
    else{
      setTotal(0)
    }
  },[shoppingCart])

  return (

    <ClientOnly fallback={'Loading...'}>
      { () => (
      <main className="container">
          <h1 className="heading">Shopping cart</h1>

          <div className="content">

          <div className="cart">
            <h2>Articles</h2>

            {shoppingCart?.length === 0 ? <h3>Cart is empty</h3> : (
              shoppingCart.map( product => (
                <div 
                  key={product.id} 
                  className="product">
                  <div>
                    <img src={product.image} alt={`Image of the product ${product.name}`}/>
                  </div>

                  <div>
                    <p className="name">{product.name}</p>
                    <p className="quantity">Quantity</p>
                    <select
                      className="select"
                      value={product.quantity}
                      onChange={e => modifyQuantityInCart({
                        quantity: +e.target.value,
                        id: product.id
                      })}
                    >
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                    </select>
                    <p className="price">unit price $: <span>{product.price}</span></p>
                    <p className="subtotal">Subtotal $: <span>{product.price * product.quantity}</span></p>
                    <button onClick={e => handleDeleteProduct(product.id)} className="deleteproduct">X</button>
                  </div>

                </div>
              ))
            )}

          </div>

          <aside className="resume">
            <h3>Cart resume</h3>
              <p>Total to pay: $ {total}</p>
          </aside>

          </div>

          

      </main>
      )}
    </ClientOnly>
  )
}

export default cart
