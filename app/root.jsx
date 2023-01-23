import {
    Meta, 
    Links,
    Outlet,
    Scripts,
    LiveReload,
    useCatch,
    Link,
} from '@remix-run/react'

import styles from './styles/index.css'
import Header from './components/header'
import Footer from './components/footer'
import { useEffect, useState } from 'react'

export function meta() {
    return(
        {
            charteset: 'utf-8',
            title: "GuitarLA - Remix",
            viewport: "width=device-width,initial-scale=1"
        }
    )
}

export function links() {
    return[
        {
            rel: "stylesheet",
            href: "https://necolas.github.io/normalize.css/8.0.1/normalize.css"
        },
        {
            rel: 'preconnect',
            href: "https://fonts.googleapis.com"
        },
        {
            rel: 'preconnect',
            href: "https://fonts.gstatic.com",
            crossOrigin: "true"
        },
        {
            rel: 'stylesheet',
            href:"https://fonts.googleapis.com/css2?family=Outfit:wght@400;700;900&display=swap"
        },
        {
            rel: 'stylesheet',
            href: styles
        }
    ]
}

export default function app () {

    const shoppingCartLS = typeof window !== 'undefined' ? JSON.parse(localStorage.getItem('shoppingCart')) ?? [] : null
    const [shoppingCart, setShoppingCart] = useState(shoppingCartLS);
    
    useEffect (() => {
        localStorage.setItem('shoppingCart', JSON.stringify(shoppingCart));
    },[shoppingCart])

    const AddToCart = (product) =>{
        
        if(shoppingCart?.some(shoppingCartProduct => shoppingCartProduct.id === product.id)){
            //Existing product
            const updtatedShoppingCart = shoppingCart.map( shoppingCartProduct => {
                if(shoppingCartProduct.id === product.id){
                    shoppingCartProduct.quantity = product.quantity;
                }
                return shoppingCartProduct

            })
            setShoppingCart([...updtatedShoppingCart])
        }
        else{
            //New product
            setShoppingCart([...shoppingCart, product])
        }
    }

    const modifyQuantityInCart = product => {
        const updtatedShoppingCart = shoppingCart.map( shoppingCartProduct => {
            if(shoppingCartProduct.id === product.id){
                shoppingCartProduct.quantity = product.quantity;
            }
            return shoppingCartProduct
        })
        setShoppingCart([...updtatedShoppingCart])
    }

    const handleDeleteProduct = id => {
        const updtatedShoppingCart = shoppingCart.filter(shoppingCartProduct => shoppingCartProduct.id !== id)
        setShoppingCart([...updtatedShoppingCart])
    }

    

    return(
        <Document>
            <Outlet 
                context={{
                    shoppingCart,
                    AddToCart,
                    modifyQuantityInCart,
                    handleDeleteProduct
                }}
            />
        </Document>
    )
}

function Document ({children}) {
    return(
        <html lang="en">
            <head>
                <Meta />
                <Links />
            </head>
            <body>
                <Header />
                {children}

                <Footer />
                <Scripts />
                <LiveReload />
            </body>
        </html>
    )
}



/** ERROR HANDLING**/
export function CatchBoundary() {
    const error = useCatch();
    return (
        <Document>
            <p className='pagenotfound'>{error.status } {error.statusText}</p>
            <Link className='errorLink' to="/" >Return to index</Link>
        </Document>
    )
}

export function ErrorBoundary({error}){
    return (
        <Document>
            <p className='pagenotfound'>{error.status } {error.statusText}</p>
            <Link className='errorLink' to="/" >Return to index</Link>
        </Document>
    )
}