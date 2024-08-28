import './App.css'
import Cabecalho from './components/Cabecalho'
import Corpo from './components/Corpo'
import Rodape from './components/Rodape'

function App() {
 const paragr2 = {

  color:'orange',
  fontSize:'1.3em'

 }

  return (
    <div>
      <Cabecalho/>
      <Corpo/>
      <Rodape/>
    </div>
  )
}

export default App
