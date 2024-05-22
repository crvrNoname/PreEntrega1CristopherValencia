import './App.css'
import Navbar from './components/navbar/navbar'
import Itemcontainer from './containers/itemscontainer/itemcontainer'
function App() {
  

  return (
    <div>
      
      <Navbar/>
      <Itemcontainer greeting='Hola Mundo'/>
    </div>
  )
}

export default App
