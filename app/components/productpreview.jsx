import { Link } from "@remix-run/react"

function ProductPreview({ product }) {

  return (
    <div className="product-container">
        <div>
          <Link 
              to={`/products/${product.attributes.url}`}>
              <img src={product.attributes.image.data.attributes.formats.small.url} alt={`${product.attributes.name} image`} />
          </Link>
        </div>
        <div className="product-content">
          <h3 className="product-name">{product.attributes.name}</h3>
          <p className="price">${product.attributes.price}</p>
        </div>
    </div>
  )
}

export default ProductPreview
