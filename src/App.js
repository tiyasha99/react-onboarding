
import './App.css';
import {BrowserRouter as Router, Switch,Route} from 'react-router-dom'
import Home from './components/pages';
import LoginPage from './components/pages/login';
import Navbar from './components/navbar';
import Community from './components/Community';

function App() {
  return (
    <Router>
      
      <Switch>
        <Route path="/" component={Home} exact/>
        <Route path="/login" component={LoginPage} exact/>
        <Route path="/community" component={Community} exact/>
      </Switch>
    </Router>
  );
}

export default App;
