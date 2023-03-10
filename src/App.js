import './App.css';
import Home from './pages/Home';
import Crystals from './pages/Crystals'
import {
  BrowserRouter as Router,
  json,
  Redirect,
  Routes,
  Route,
  Link
} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <div className="App-body">
        <Router>
          <Routes>
            <Route exact path="/" element={<Home/>}/>
            <Route exact path="/crystals/:id" element={<Crystals/>}/>
            <Route exact path="/filter/tags?" element={<Crystals/>}/>
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
