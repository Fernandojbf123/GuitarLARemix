
function Course({course}) {

    const {title, content, image} = course;
    const im = image.data.attributes.url;

  return (

    <section className='course'>
        <style jsx="true">{`
            .course{
                background-image: linear-gradient(to right, rgb(0 0 0 /0.5), rgb(0 0 0 / 0.6)), url(${im});
            }
        `}</style>
        <div className= "course-grid">
            <div className="content">
                <h3 className="heading">{title}</h3>
                <p className="text">{content}</p>
            </div>
        </div>
    </section>
    
    
  )
}

export default Course
