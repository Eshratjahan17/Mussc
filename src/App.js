
import './App.css';
import { Route, Routes } from 'react-router';
import Home from './Components/Home/Home';
import NotFound from './Components/Home/NotFound/NotFound';

function App() {
  return (
    <div  >
     <Routes>
      <Route path='/' element={<Home></Home>}></Route>
      <Route path='*' element={<NotFound></NotFound>}></Route>
     </Routes>
    </div>
  );
}

export default App;
