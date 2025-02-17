import { useContext } from "react";
import { NameContext } from "../ContextHook/NameContext";

function F() {
    let name = useContext(NameContext);
  return (
    <div>F : {name}</div>
  )
}

export default F