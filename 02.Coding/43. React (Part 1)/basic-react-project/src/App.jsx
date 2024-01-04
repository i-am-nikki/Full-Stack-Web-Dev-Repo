import "./App.css"
import Title from "./Title.jsx"
import ProductTab from "./ProductTab.jsx"

function App() {
  return (
  <>
    <h1> This is my app component</h1>
    <p>Inside app component we have: </p>
    <Title/>
    <p>2 * 2 = {2*2}</p>
    <ProductTab/>
  </>
  );
}

export default App
