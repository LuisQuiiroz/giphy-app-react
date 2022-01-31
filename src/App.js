import './App.css';

import { Link, Route } from 'wouter'

import ListOfGifs from './components/ListOfGifs';


function App() {
  return (
    <div className="App">
      <section className="App-content">
        <h1>App</h1>
        <Link to='/gif/mexico'>Gifs de méxico</Link>
        <Link to='/gif/japon'>Gifs de japon</Link>
        <Link to='/gif/europa'>Gifs de europa</Link>
        <Route
          component={ListOfGifs}
          path='/gif/:keyword'
        />
      </section>
    </div>
  );
}

export default App;
