import { useState } from 'react'
import {useSelector} from "react-redux";
import { increment, decrement, reset } from './redux/counterSlice';
import { useDispatch } from 'react-redux';

function Counter() {
    const dispatch = useDispatch();
    const {value} = useSelector(state => state.counter);
  return (
    <div>
        <h1>{value}</h1>
        <button onClick={()=> dispatch(increment())}>Increment</button>
        <button onClick={()=> dispatch(decrement())}>Decrement</button>
        <button onClick={()=> dispatch(reset())}>Reset</button>
    </div>
  )
}

export default Counter
