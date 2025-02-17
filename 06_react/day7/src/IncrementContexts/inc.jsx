import {useContext} from 'react'
import { ValueContext } from '../ContextHook/IncrementContext'
import VLO from './vlo';

function Inc() {
    let {increment, decrement, reset} = useContext(ValueContext);
  return (
    <div>
        <h1>Increment</h1>
        <VLO></VLO>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        <button onClick={reset}>Reset</button>
    </div>
  )
}

export default Inc