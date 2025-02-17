import React from 'react'
import { ValueContext } from '../ContextHook/IncrementContext'
function VLO() {
    let {someValue} = React.useContext(ValueContext);
  return (
    <div>
        <h1>
            {someValue}
        </h1> 
    </div>
  )
}

export default VLO