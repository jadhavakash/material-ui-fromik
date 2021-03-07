import './App.css';
import SignUp from './components/Signup';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Switch,Route} from "react-router-dom";
import Cards from './components/Cards';
import Table from './components/TableGrid';
import FoodCard from './components/FoodCard';
import Main from "./components/food/Main";
function App() {
  return (
    <div className="App">
      <Router>
      <Navbar />
        <Switch>
          <Route exact path="/login" component={SignUp} />
          <Route exact path="/cards" component={Cards} />
          <Route exact path="/table" component={Table} />
          <Route exact path="/foodrecepie" component={Main} />
          <Route exact path="/food"  component={FoodCard} />
          
        </Switch>
      </Router>
    </div>
  );
}

export default App;
