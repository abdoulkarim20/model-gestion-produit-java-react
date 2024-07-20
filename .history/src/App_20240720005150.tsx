import './App.css'
import './../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { useLocation } from 'react-router-dom'

function App() {
  const location=useLocation();
  return (
    <>
      {
        location.pathname==='/'?<Cat
      }
    </>
  )
}

export default App
