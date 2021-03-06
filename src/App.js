import { useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Footer from './Components/Footer';
import Header from './Components/Header';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Home from './Pages/Home';
import Projects from './Pages/Projects';
// - projects
import HomeTodo from './Pages/projects/TodoList/HomeTodo';
import PixelArt from './Pages/projects/PixelArt/PixelArt';
// - projects
import './styles/App.css';

function App() {
  const [classMode, setClassMode] = useState(false);
  return (
    <div className={ classMode ? 'light' : 'dark' }>
      <BrowserRouter>
      <Header setClassMode={ setClassMode } classMode={ classMode } />
        <Switch>
          <Route exact path="/" component={ Home } />
          <Route exact path="/about" component={ About } />
          <Route exact path="/projects" component={ Projects } />
          <Route exact path="/projects/todolist" component={ HomeTodo } />
          <Route exact path="/projects/pixelart" component={ PixelArt } />
          <Route exact path="/contact" component={ Contact } />
        </Switch>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
