import "./App.css";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";

function App() {
  return (
    <div className="App">
      <ItemListContainer greeting={"Listado de todos los productos"} />
      <ItemDetailContainer />
    </div>
  );
}

export default App;
