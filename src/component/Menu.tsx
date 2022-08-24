import React, { useState } from "react";
import styled from "styled-components/macro";
import InnerMenu from "./InnerMenu";
import CartCheckout from "./CartCheckout";

const Wrapper = styled.div`
  position: relative;
`;

const MenuList = styled.div`
  display: flex;
  //gap:40px;
  justify-content: space-between;
  align-items: center;
`;

const Header = styled.img`
  // font-size:30px;
  // font-family: 'Alata', sans-serif;
  content: url(static/logo.svg);
  // width:200px;
  object-fit: contain;
  margin-top: -0.5rem;
`;

const MenuBtn = styled.h5`
  font-size: 15px;
  font-family: "Alata", sans-serif;
  color: var(--dark-grayish-blue);
`;

const ImgCart = styled.img`
  content: url(static/icon-cart.svg);
  object-fit: contain;
`;

const ImgUser = styled.img`
  content: url(static/image-avatar.png);
  // width:50px;
  // height:50px;
  width: 2rem;
  margin-left: 0.5rem;
  object-fit: contain;
`;

const HR = styled.hr`
  color: #bbb;
`;

const HamburgerMenu = styled.img`
  content: url(static/icon-menu.svg);
`;

const FlexMenuWrapper = styled.div`
  display: flex;
  align-items: center;
  position: relative;
`;

interface Props {
  numberOfItemsInCart: number;
  setNumberOfItemsInCart: (num: number) => void;
}

function Menu({ numberOfItemsInCart, setNumberOfItemsInCart }: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState<boolean>(false);

  const toggleCart = () => {
    if (isCartOpen) {
      setIsCartOpen(false);
    } else {
      setIsCartOpen(true);
    }
  };

  return (
    <Wrapper>
      <MenuList>
        <FlexMenuWrapper>
          <Header />
          <button
            style={{ background: "transparent", border: "none" }}
            onClick={() => setIsOpen(true)}
          >
            <HamburgerMenu />
          </button>
          <InnerMenu isOpen={isOpen} setIsOpen={setIsOpen} />
        </FlexMenuWrapper>
        <FlexMenuWrapper>
          <ImgCart onClick={toggleCart} />
          {numberOfItemsInCart ? numberOfItemsInCart : ""}

          <ImgUser />
        </FlexMenuWrapper>
      </MenuList>
      <HR />
      {isCartOpen ? (
        <CartCheckout
          numberOfItems={numberOfItemsInCart}
          setNumberOfItems={setNumberOfItemsInCart}
        />
      ) : (
        ""
      )}
    </Wrapper>
  );
}

export default Menu;
