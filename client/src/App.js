import SKList from "./components/SKList";
import Header from "./Header";
import Home from "./Home";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="container">
      <Header />  
      <Router>
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route path='/suratkeluar'>
            <SKList />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
