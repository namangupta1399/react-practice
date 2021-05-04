import './App.css';
import Person from './Person/Person';
import Product from './Product/Product';

function App() {
  return (
    <div className="App">
      <p className="p1">Welcome to React App</p>
      <Person id="1001" name="John" age="23" />
      <Product productId="1001" productName="Laptop" productPrice="20000" />
    </div>
  );
}

export default App;
