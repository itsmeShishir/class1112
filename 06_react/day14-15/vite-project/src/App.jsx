import {useEffect } from 'react'
import { Provider } from 'react-redux'
import store from './redux/store'
import Counter from './counter'
import { useSelector,useDispatch } from 'react-redux'
import { toggle } from './redux/modeSlice'

function DarkMode(){
  const dispatch = useDispatch();
  const {value} = useSelector(state => state.mode);
  useEffect(()=>{
    document.body.classList.toggle('dark',value)
  },[value])
  return(
    <button onClick={()=> dispatch(toggle())}>Toggle</button>
  )
}

function App() {
  return (
    <Provider store={store}>
        <DarkMode />
        <Counter />
    </Provider>
  )
}

export default App
