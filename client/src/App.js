import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Register from './components/Register'
import Login from './components/Login';
import NewRecipe from './components/NewRecipe';
import DisplayAll from './components/DisplayAll';


function App() {
  return (
    <div>

    <BrowserRouter>
      <Routes>

        <Route element={<Register/>} path="/" default />
        <Route element={<Login/>}path = "/" />
        
        {/* <Route elememt={<DisplayAll/>} path="/display/all"/> */}
        <Route element={<NewRecipe/>} path="/recipe/new"/>


      </Routes>
    </BrowserRouter>

    </div>
  );
}

export default App;
