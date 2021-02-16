import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Login from './components/Login'
import Nav from './components/Nav'


function App() {
  return (
    <Router>
    <div className="App">
      <Nav/>
    <Login/>
    </div>
    </Router>
  );
}

export default App;
