import logo from './logo.svg';
import './App.css';
import Navbar from './Component/Navbar';
import HomePage from './Page/HomePage';
import AllRoutes from './Routes/AllRoutes';
// import Products from './Page/Products';

function App() {
  return (
    <>
      <Navbar />
      {/* <HomePage /> */}
      <AllRoutes/>
    </>
  );
}

export default App;
