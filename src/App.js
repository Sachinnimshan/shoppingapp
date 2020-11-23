import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar';
import Home from './Products/Home';
import Footer from './Footer/Footer';

function App() {
  return (
    <div>
     <Router>
       <Navbar/>
       <Switch>
         <Route exact path='/' component={Home}/>
       </Switch>
       <Footer/>
     </Router>
    </div>
  );
}

export default App;
