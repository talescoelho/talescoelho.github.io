import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './Components/Header';
import Home from './Pages/Home';

function App() {
  return (
    <div>
      <Header />
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={ Home } />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
