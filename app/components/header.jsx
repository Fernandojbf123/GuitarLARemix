import { Link } from "@remix-run/react"
import logo from '../../public/img/logo.svg'
import Navigation from "./Navigation"


function Header() {


  return (
    <header className="header">
      <div className="container navbar">
        <div className="Logo">
          <Link to="/">
            <img className="logo" src={logo} alt="Logo-image" />
          </Link>
        </div>

        <Navigation />
      </div>
      
    </header>
  )
}

export default Header
