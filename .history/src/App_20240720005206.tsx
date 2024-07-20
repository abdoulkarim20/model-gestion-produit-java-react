import './App.css'
import './../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { useLocation } from 'react-router-dom'
import CategorieTable from './components/categories/CategorieTable';

function App() {
  const location=useLocation();
  return (
    <>
      {
        location.pathname==='/'?<CategorieTable/>:(
          <div></div>
        )
      }
    </>
  )
}

export default App
