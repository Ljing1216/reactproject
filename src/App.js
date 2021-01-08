import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import About from './pages/about/about'
import Home from './pages/home/home'
function App() {
  return (
    <div className="App">
      <Router>  
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route path="/about" component={About}></Route>
          <Route component={Home}></Route>
      </Switch>
      </Router>
    </div>
  );
}

export default App;
