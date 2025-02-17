// Hooks -> useState, useEffect
// what is hooks -> hooks are functions 
//                  that let you use state and other React features without writing a class.
// type of hooks in React ->
// 1. useState -> it is used to manage the state of the component
// 2. useEffect -> it is used to perform side effects in your function component
// 3. useContext -> it is used to pass data through the component tree without having to pass props down manually at every level
// 4. useReducer -> it is used to manage the state of the component
// 5. useCallback -> it is used to memoize the function
// 6. useMemo -> it is used to memoize the value
// 7. useRef -> it is used to access the dom element
// 8. useImperativeHandle -> it is used to customize the instance value that is exposed to parent components when using ref
// 9. useLayoutEffect -> it is used to perform the side effects in your function component
// 10. useDebugValue -> it is used to display a label for custom hooks in React DevTools
// 11. useId -> it is used to generate a unique id
// 12. useDeferredValue -> it is used to defer the value

import One from "./Component/One"

// ContextApi -> it is used to pass the data through the component tree without having to pass props down manually at every level

function App() {
  return (
    <div>
      <One />
    </div>
  )
}

export default App