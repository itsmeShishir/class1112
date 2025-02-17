import { useContext } from "react"
import { NameContext } from "../ContextHook/NameContext"
function E() {
    let name = useContext(NameContext);

  return (
    <div>
        <h1>Hello from E Component : {name}</h1>
    </div>
  )
}



export default E