import { Outlet, useOutletContext } from "@remix-run/react"
import styles from "../styles/store.css"



export function links() {
  return[
    {
      rel: 'stylesheet',
      href: styles
    }
  ]
}

function Store() {
  
  return (
    <main className="container">
      <Outlet 
        context={useOutletContext()}/>
    </main>
  )
}

export default Store
