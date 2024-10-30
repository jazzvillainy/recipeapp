import { useState } from "react";
import Search from "./components/Search";
import ItemList from "./components/ItemList";
import Nav from "./components/Nav";
import Container from "./components/Container";
import InnerContainer from "./components/InnerContainer";
import ItemDetail from "./components/ItemDetail";
// import "../src/App.css"

function App() {
  const [foodData, setFoodData] = useState([]);
  const [itemId, setItemId] = useState("658615")

  return (
    <div>
      <Nav />
      <Search foodData={foodData} setFoodData={setFoodData} />
      <Container>
        <InnerContainer>
          <ItemList setItemId={setItemId} foodData={foodData} />
        </InnerContainer>
        <InnerContainer>
          <ItemDetail itemId={itemId} />
        </InnerContainer>
      </Container>
    </div>
  );
}

export default App;
