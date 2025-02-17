import HelloComp from './Component/HelloComp'
import A from './PropsDrilling/A'
import { NameContext } from './ContextHook/NameContext'
import IncrementContext from './ContextHook/IncrementContext'
import Inc from './IncrementContexts/inc'
// children -> props -> UI
function App() {
  return (
    <IncrementContext>
      <NameContext.Provider value="hari">
        <HelloComp> 
          <h1>Helo Comp</h1>
        </HelloComp>
        <HelloComp> 
          <h1>Shishir Bhandari</h1>
        </HelloComp>
        <A />
        <Inc />
      </NameContext.Provider>
    </IncrementContext>
  )
}

export default App