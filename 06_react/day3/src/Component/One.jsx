// 1. useState -> it is used to manage the state of the component
// why to use useState -> it is used to manage the state of the component
// how to use useState -> const [state, setState] = useState(initialState)
// what is the initial state -> it is the initial value of the state
// what is the state -> it is the current value of the state
// what is the setState -> it is used to update the state
// ternary operator -> it is used to check the condition
// import React from "react";
import {useState} from "react";
function One() {
    // let [one, setOne] = React.useState(0);
    let [one, setOne] = useState(0);
    let increment = () =>{
        setOne(one + 1);
    }
    let decrement = () =>{
        setOne(one - 1);
    }
    let reset = () =>{
        setOne(0);
    }
    console.log("one",one);
    console.log("setOne",setOne);
  return (
    <div>
        <button onClick={increment}>Count Increment: {one}</button>
        <button onClick={decrement}>Count Decrement: {one}</button>
        <button onClick={reset}>Count 0: {one}</button>
    </div>
  )
}

export default One