import Guitar from "./guitar"

function Productlist({guitars}) {
  return (
    <>
    {guitars?.length>0 && (
        <div className="guitar-grid">
          {guitars.map( guitar => (
            <Guitar
              key={guitar?.id}
              guitar={guitar?.attributes}>
            </Guitar>
          ))}
        </div>
      )}
    </>
  )
}

export default Productlist
