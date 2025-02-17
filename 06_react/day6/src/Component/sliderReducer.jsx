import {useReducer} from 'react'

let image = [
    "https://images.unsplash.com/photo-1739382122846-74e722a6eea4?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyfHx8ZW58MHx8fHx8",
    "https://images.unsplash.com/photo-1739382446038-184e72fdc427?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw2fHx8ZW58MHx8fHx8",
    "https://plus.unsplash.com/premium_photo-1739016808747-f96b411ed186?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw5fHx8ZW58MHx8fHx8",
    "https://images.unsplash.com/photo-1739609439850-2eace0b03218?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw4fHx8ZW58MHx8fHx8",
    "https://plus.unsplash.com/premium_photo-1739006980029-8753f30cd8d4?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyNXx8fGVufDB8fHx8fA%3D%3D"
]

let reducer = (state, action) =>{
    switch(action.type){
        case "Next":
            return {count : (state.count + 1) % image.length }
        case "Prev":
            return {count : (state.count -1 + image.length) % image.length }
        default:
            return state
    }
}

function SliderReducer() {
    let [state, dispatch] = useReducer(reducer, {count:0} )
    
  return (
    <div>
        <img src={image[state.count]} alt="" />
        <button onClick={()=> dispatch({type: "Next"})}> Next </button>
        <button onClick={()=> dispatch({type: "Prev"})}> Prev </button>
    </div>
  )
}

export default SliderReducer