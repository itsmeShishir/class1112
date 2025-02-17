import AxiosData from "./assets/component/AxiosData"
// import FetchData from "./assets/component/fetchData"
import { useRef } from "react"

function App() {
  let top = useRef();
  let color = useRef();

  let chnageColor = () =>{
    color.current.style.backgroundColor = "red";
  }

  let gobacktotop = () =>{
    top.current.scrollIntoView({scrollBehavior: "smooth"});
  }
  console.log(top);
  

  return (
    <div>
      <h1 ref={color}>Color Changed</h1>
      <h2 ref={top}>You are on Top</h2>
      {/* <FetchData /> */}
      <AxiosData />
      <button onClick={gobacktotop}>GO Back to Top</button>
      <button onClick={chnageColor}>Chnage Color</button>
    </div>
  )
}

export default App