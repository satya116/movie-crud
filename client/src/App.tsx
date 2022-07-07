import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


import './App.css';
import AddUser from './component/AddMovie';
import AllMovies from './component/AllMovies';
import EditUser from './component/EditMovie';

import HomePage from './pages/HomePage';

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/add' element={<AddUser />}/>
        <Route path='/edit/:id' element={<EditUser />} />
        <Route path ='/all' element={<AllMovies />} />
      </Routes>
    </Router>

    </>
  );
}

export default App;
