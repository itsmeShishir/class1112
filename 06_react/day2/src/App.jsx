// external css, how to install tailwind css, how to use , how to use js ,React Fragment, Hooks -> use state and use effect,
import { Productdata } from "./data/products"
import "./App.css";

function App() {
  // how to use js -> 
  let names = "Niresh"
  let others = ["Bijendra", "Shrestha", "Rajesh", "Ramesh", "sontosh"]
  console.log(Productdata);
  return (
    <div className="section">
      {/* <h1>{names}</h1>
        {others.map((name) => {
          return (
          <h1>{name}</h1>
        );
        })} */}
        {Productdata.map((value , index) => {
          return (
            <div className="card" key={index}>
              <h1 className="bg-red-500">{value.title}</h1>
              <img className="image" src={value.image} alt="" />
              <h1 className="price">{value.price}</h1>
              <h1 className="rating">{value.rating.rate}</h1>
            </div>
          )
        })}
    </div>
  )
}

export default App