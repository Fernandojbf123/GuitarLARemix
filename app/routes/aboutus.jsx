import styles from '../styles/aboutus.css'
import image from '../../public/img/aboutus.jpg'


export function meta() {
  return{
          title: "GuitarLA - Remix - about us",
          description: "Guitar store, music blog"
  }
}

export function links() {
  return[
    {
      rel: 'stylesheet',
      href: styles
    },
    {
      rel: 'preload',
      href: image,
      as: 'image',
    }
  ]
}

function AboutUs() {
  return (
    <div className="container us">
      <h2 className="heading">About us</h2>

      <div className='content'>
        <img src={image} alt="about us image. it is decorative" />
        <div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda necessitatibus blanditiis repudiandae ex voluptatum iusto numquam omnis, sequi consequatur earum perferendis amet harum accusantium. Doloribus, maiores quasi. Velit, vel saepe!</p>

          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. At voluptatem amet eligendi, voluptatum culpa commodi.</p>
        </div>

      </div>

    </div>
  )
}

export default AboutUs
