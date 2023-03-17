import './App.css';
import Home from './pages/Home';
import Crystal from './pages/Crystal'
import Filter from './pages/Filter';
import NotFound from './pages/NotFound'
import {
  BrowserRouter as Router,
  json,
  Redirect,
  Routes,
  Route,
  Navigate,
  Link
} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <div className="App-body">
        <Router>
          <Routes>
            <Route exact path="/" element={<Home/>}/>
            <Route exact path="/crystal/:id" element={<Crystal/>}/>
            <Route exact path="/filter" element={<Filter/>}/>
            <Route exact path="/404" element={<NotFound/>}/>
            <Route path='*' element={<Navigate to='/404' />} />
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
