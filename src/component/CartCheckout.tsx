import { useState } from "react";
import styled from "styled-components/macro";

// @import "../../styles/_variables";

const FlexWrapper = styled.div`
  display: flex;
`;

const FlexContainer = styled.div`
  flex: 90%;
  display: flex;
  flex-direction: column;
  // align-items:center;
`;

const SmallFlexContainer = styled.div`
  flex: 10%;
  display: flex;
  flex-direction: column;
  // align-items:center;
  gap: 20px;
`;

const WholeCart = styled.div`
  position: absolute;
  z-index: 5;
  top: 60px;
  width: 350px;
  right: 30px;
  border-radius: 10px;
  margin: 0 auto;
  box-shadow: 0 0 1px 2px #0001;
  background: white;
`;

const CartHeader = styled.div`
  padding: 1.5rem;
  border-bottom: 1px solid transparentize($greyish-blue, 0.7);
  padding-bottom: 0px;
`;

const CartTitle = styled.div`
  font-size: 1.1rem;
  padding-bottom: 0px;
`;

const CartBody = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 187px;
  padding: 1.5rem 1.5rem 2rem;
  color: $dark-greyish-blue;
`;

const CartMessage = styled.div`
  font-weight: 700;
  text-align: center;
`;

const CartItemsList = styled.div`
  list-style: none;
`;

const Item = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 1.5rem;
`;

const ItemImage = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 5px;
`;

const ItemInfo = styled.div`
  margin-left: 1rem;
`;

const ItemName = styled.div`
  margin-bottom: 0.25rem;
  font-size: 1rem;
  font-weight: normal;
`;

const ItemCostContainer = styled.div`
  letter-spacing: 1px;
`;

const ItemTotalCost = styled.div`
  //   margin-left: 0.4rem;
  color: var(--very-dark-blue);
  font-weight: 700;
`;

const ItemDeleteBtn = styled.div`
  border: none;
  margin-left: auto;
  background: none;
  cursor: pointer;

  &:hover,
  &:focus {
    filter: brightness(0);
  }
`;

const ItemDeleteIcon = styled.div`
  display: block;
`;

const CartCheckoutBtn = styled.div`
  position: relative;
  border: none;
  border-radius: 10px;
  padding: 1rem;
  background-color: var(--orange);
  color: var(--white);
  font-size: 1rem;
  font-weight: 700;
  cursor: pointer;
  text-align: center;

  &:hover::after,
  &:focus::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: transparentize(white, 0.6);
  }
`;

interface Props {
  numberOfItems: number;
  setNumberOfItems: (num: number) => void;
}

export default function CartCheckout({
  numberOfItems,
  setNumberOfItems,
}: Props) {
  return (
    <WholeCart>
      <CartHeader>
        <CartTitle>
          <h2>Cart</h2>
        </CartTitle>
      </CartHeader>
      <CartBody>
        {numberOfItems ? (
          <>
            <CartItemsList>
              <Item>
                <FlexWrapper>
                  <SmallFlexContainer>
                    <ItemImage src="static/image-product-1-thumbnail.jpg"></ItemImage>
                  </SmallFlexContainer>
                  <FlexContainer>
                    <ItemInfo>
                      <ItemName>
                        <h3 style={{ marginTop: "0px" }}>
                          Autumn Limited Edition Sneaker
                        </h3>
                      </ItemName>
                      <FlexWrapper>
                        <ItemCostContainer>
                          $125.00 x {numberOfItems}
                        </ItemCostContainer>
                        <ItemTotalCost>
                          ${" " + 125 * numberOfItems}.00
                        </ItemTotalCost>
                      </FlexWrapper>
                    </ItemInfo>
                  </FlexContainer>
                  <SmallFlexContainer>
                    <ItemDeleteBtn onClick={() => setNumberOfItems(0)}>
                      <ItemDeleteIcon>
                        <img src="static/icon-delete.svg"></img>
                      </ItemDeleteIcon>
                    </ItemDeleteBtn>
                  </SmallFlexContainer>
                </FlexWrapper>
              </Item>
            </CartItemsList>
            <CartCheckoutBtn>Checkout</CartCheckoutBtn>
          </>
        ) : (
          <CartMessage>
            <p>Your cart is empty.</p>
          </CartMessage>
        )}
      </CartBody>
    </WholeCart>
  );
}
