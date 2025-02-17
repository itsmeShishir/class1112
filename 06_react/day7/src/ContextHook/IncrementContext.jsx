import { createContext, useState } from "react";
export const ValueContext = createContext();
function IncrementContext({children}) {
    let [someValue, setSomeValue] = useState(0);
    let increment = () => {
        setSomeValue(someValue + 1);
    }
    let decrement = () => {
        setSomeValue(someValue - 1);
    }
    let reset  = () =>{
        setSomeValue(0);
    }
  return (
    <ValueContext.Provider value={{someValue, increment, decrement, reset}}>
      {children}
    </ValueContext.Provider>
  )
}
export default IncrementContext