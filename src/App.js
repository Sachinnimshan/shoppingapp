import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar';
import Products from './Products/Products';

function App() {
  return (
    <div>
     <Router>
       <Navbar/>
       <Switch>
         <Route exact path='/' component={Products}/>
       </Switch>

     </Router>
    </div>
  );
}

export default App;
