
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './componenets/footer/footer';
import Header from './componenets/header/header';

import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";


import Commitee from './componenets/about/committee';
import Constitution from './componenets/about/constitution';
import Home from './componenets/home/home';

function App() {
  return (
    <Router>
      <div>
        <Header />
        
        
        {/*
          A <Switch> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */}
        <Routes>
          <Route exact path="/" element={ <Home/>}/>
          <Route exact path="/commitee" element={ <Commitee/>}/>
          <Route path="/constitution" element={ <Constitution/>}/>
          
        </Routes>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
