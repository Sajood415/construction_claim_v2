import Admin from './components/Admin'
import Contractor from './components/Contractor';
import Client from './components/Client';
import Consultant from './components/Consultant';
import Main from './Main';


import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {

  return (
    <Router>
      <Routes>
        <Route index path='/' element={< Main />}></Route>
        <Route path='/admin' element={< Admin />}></Route>
        <Route path='/contractor' element={< Contractor />}></Route>
        <Route path='/consultant' element={< Consultant />}></Route>
        <Route path='/client' element={< Client />}></Route>
      </Routes>
    </Router>
  );
}

export default App;