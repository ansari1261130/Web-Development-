import ColorChanger from './components/colorChanger'
import './App.css'

function App() {
  return (
    <>
      <div className="conatiner">
      <ColorChanger>
      <h1>Dynamic Content Here!</h1>
      <p>This content is passed as children to the ColorChanger component.</p>
      </ColorChanger>
      </div>
    </>
  )
}


export default App
