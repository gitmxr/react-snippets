import './App.css'
import Cart from './components/Cart'
import Items from './components/Item'

function App() {
  return (
    <>
      <h1>Welcome to My Store</h1>
      <Items name="Laptop" price="999" />
      <Items name="Smartphone" price="2100" />
      <Cart />
      
    </>
  )
}

export default App
