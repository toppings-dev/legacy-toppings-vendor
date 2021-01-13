import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Portal from './pages/Portal';

function App() {
  return (
    <div className="wrapper">
      <BrowserRouter>
        <Route exact path="/portal" component={Portal} />
      </BrowserRouter>

      <header className="primary">
        Toppings
      </header>
    </div>
  );
}

export default App;
