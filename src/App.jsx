import Profilecard from './Profilecard'
import './App.css'

function App() {
  const producto=[0]
  return (
      
      <div className="App">
        <Profilecard
        producto="Cafe Americano"
        precio="15000Gs"
        />
        <Profilecard
        producto="Cafe con leche"
        precio="15000Gs"
        />
        <Profilecard
        producto="Jugo de frutilla"
        precio="10000Gs"
        />
        <Profilecard
        producto="Agua mineral"
        precio="5000Gs"
        />
        <Profilecard
        producto="Mixto"
        precio="15000Gs"
        />
      </div>
      
  )
}

export default App
