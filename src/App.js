import logo from './logo.svg';
import './App.css';
import Menu from './Menu';
import Banner from './Banner';
import Form from './Form';
import CardGrid from './CardGrid';
import Poster from './Poster';
import NotFoundPage from './NotFoundPage';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

function App() {
  return (
    <Router>
      <Menu />
      <Switch>
        <Route path="/cards/:id" component={Poster} />
        <Route path="/" exact component={Banner}/>
        <Route path="/cards" component={CardGrid} />
        <Route path="/form" component={Form} />
        <Route component={<NotFoundPage />} />
      </Switch>
    </Router>
  );
}

export default App;
