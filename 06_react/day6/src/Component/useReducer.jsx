import {useReducer} from 'react'

let reducer = (state, action) =>{
    switch(action.type){
        case "increment":
            return {count : state.count + 1 }
        case "decrement":
            return {count : state.count - 1 }
        case "reset":
            return {count : state.count = 0 }
        default:
            return state
    }
}

function Reducer() {
    let [state, dispatch] = useReducer(reducer, {count: 0} )
    
  return (
    <div>
        <h1>{state.count}</h1>
        <button onClick={()=> dispatch({type: "increment"})}> Increment </button>
        <button onClick={()=> dispatch({type: "decrement"})}> Decrement </button>
        <button onClick={()=> dispatch({type: "reset"})}> Reset </button>
    </div>
  )
}

export default Reducer