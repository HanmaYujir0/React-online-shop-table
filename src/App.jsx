
import products from "./Components/Product.jsx";
import Table from "./Components/Table.jsx";

function App() {
  return (
    <table>
      {products.map((prod) => {
        return (
          <Table
          key={prod.id}
            id={prod.id}
            left={prod.left}
            name={prod.name}
            price={prod.price}
            image={prod.image}
          />
        );
      })}
    </table>
  );
}

export default App;
