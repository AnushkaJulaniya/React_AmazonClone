
import './App.css'
import Footer from './Components/footer/Footer.jsx';
import Navbar from './Components/navbar/Navbar.jsx';
import { Outlet } from 'react-router-dom';

function App() {

  return (
    <>
      <div className="fullpage">
        <Navbar />
        <Outlet />
        <Footer />
      </div>

    </>
  )
}

export default App
