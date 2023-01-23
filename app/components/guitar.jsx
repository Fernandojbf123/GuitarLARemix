import { Link } from "@remix-run/react"

function Guitar({guitar}) {

  const {name,price,url,description,image} = guitar;
  return (
    <div className="guitar">
      <Link 
        to="/">
          <img src={image.data.attributes.formats.small.url} alt={`guitar ${name} image`}/>
        </Link>
        <div className="content">
            <h3 className="guitar-name">{name}</h3>
            <p className="description">{description}</p>
            <p className="price">${price}</p>
            <Link 
              className="link"
              to={`/products/${url}`}
            >See guitar details</Link>

        </div>
      
    </div>
  )
}

export default Guitar
