import React from "react";
import styled from "styled-components/macro";

const ContainerBtnAddCart = styled.div`
  width: 30%;
  height: auto;
  //margin-top: 0.8rem;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  padding: 0.9rem;

  border: none;
  border-radius: 0.5rem;

  background: var(--orange);

  box-shadow: 0px 10px 16px 1px hsl(26, 100%, 55%, 30%);

  span {
    font-weight: 700;
    color: var(--white);
  }

  img {
    width: 1rem;
    fill: #fff;
  }

  &:hover {
    cursor: pointer;
  }
`;

function AddCartBtn({ Initiation }: { Initiation: () => void }) {
  return (
    <ContainerBtnAddCart onClick={Initiation}>
      <img src="static/icon-cart.svg" alt="cart" />
      <span>Add to card</span>
    </ContainerBtnAddCart>
  );
}

export default AddCartBtn;
