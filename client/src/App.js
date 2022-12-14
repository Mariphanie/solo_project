import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './views/Main';
import NewRecipe from './components/NewRecipe';
import DisplayAll from './components/DisplayAll';
import UpdateRecipe from './components/UpdateRecipe';
import OneRecipe from './views/OneRecipe';
import VeganRecipe from './views/VeganRecipe';


function App() {

  return (
    <div>

    <BrowserRouter>
      <Routes>

        <Route element={<Main/>} path="/" default />
      
    
        <Route element={<DisplayAll />} path='/home'/>
        <Route element={<NewRecipe />} path='/recipe/new' />
        <Route element={<UpdateRecipe />} path='/recipe/edit/:id' />
        <Route element={<OneRecipe />} path='/recipe/one/:id' />
        <Route element={<VeganRecipe/>} path='/recipe/vegan/:id'/>


      </Routes>
    </BrowserRouter>

    </div>
  );
}

export default App;
