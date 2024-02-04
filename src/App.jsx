import "./App.css";
import {Routes,Route} from "react-router-dom"
import HomePage from './pages/HomePage'
import CountryDetails from './pages/CountryDetailsPage'
import Navbar from './components/Navbar'

function App() {
  return (
    <div className="App">
      {/*<h1>WikiCountries: Your guide to the World</h1>*/}
      <Navbar></Navbar>
      <Routes>
<Route path="/" element={<HomePage></HomePage>}> </Route>
<Route path="/:alpha3" element={<CountryDetails></CountryDetails>}> </Route>
</Routes>
    </div>
  );
}

export default App;
