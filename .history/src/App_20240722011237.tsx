import './App.css'
import './../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { Outlet, useLocation } from 'react-router-dom'
import CategorieTable from './components/categories/CategorieTable';
import { useEffect } from 'react';
import { setupErrorHandLingInterceptor } from './interceptors/axiosInterceptors';

function App() {

  const location = useLocation();
  useEffect(() => {
    setupErrorHandLingInterceptor
  }, []);

  return (
    <>
      {
        location.pathname === '/' ? <CategorieTable /> : (
          <div className='container-style'>
            <Outlet />
          </div>
        )
      }
    </>
  )
}

export default App
