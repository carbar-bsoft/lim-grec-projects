import { Button } from 'react-bootstrap';
import './App.css';
import Products from './components/Products';
import Ratings from './components/Ratings';

function App() {
  const isValid = true;

  return (
    <div>
      <Ratings rating='1' />
      <Ratings rating='2' />
      <Ratings rating='3' />
      <Ratings rating='4' />
      <Ratings rating='5' />
      {/* <Products />
      <Button variant="primary" disabled= {!isValid}>Default</Button> */}
    </div>
  );
}

export default App;