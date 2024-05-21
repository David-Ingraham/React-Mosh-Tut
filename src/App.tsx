import ListGroup from "./components/ListGroup";

function App() {
  let items = ["nyc", "san fran", "tokyo", "london", "paris"];

  return (
    <div>
      {" "}
      <ListGroup items={items} heading="Cities" />{" "}
    </div>
  );
}

export default App;
