import Canvas from "./canvas"
import Customaizer from "./pages/Customaizer"
import Home from "./pages/Home"

function App() {
 

  return (
    <main className="app transition-all ease-in">
       <Home/>
       <Canvas/>
       <Customaizer/>
    </main>
  )
}

export default App
