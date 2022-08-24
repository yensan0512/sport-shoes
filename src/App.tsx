import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import styled from "styled-components/macro";
import Menu from "./component/Menu";
import Container from "./component/Container";
import Cart from "./component/CartCheckout";

const Wrapper = styled.div`
  background: var(--white);
  height: 100vh;
  width: 100vw;
`;

function App() {
  const [itemInCart, setItemInCart] = useState(0);
  const [quantity, setQuantity] = useState(0);

  const Initiation = () => {
    setQuantity(itemInCart);
    setItemInCart(0);
  };

  return (
    <Wrapper>
      <Menu
        numberOfItemsInCart={quantity}
        setNumberOfItemsInCart={setQuantity}
      />
      <Container
        itemInCart={itemInCart}
        setItemInCart={setItemInCart}
        Initiation={Initiation}
      />
    </Wrapper>
  );
}

export default App;
