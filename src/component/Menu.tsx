import React, { useState } from "react";
import styled from "styled-components/macro";
import InnerMenu from "./InnerMenu";

const Wrapper = styled.div`

`;

const MenuList = styled.div`
  display:flex;
  //gap:40px;
  justify-content: space-between;
  align-items: center;
`;

const Header = styled.img`
  // font-size:30px;
  // font-family: 'Alata', sans-serif;
  content:url(static/logo.svg);
  // width:200px;
  object-fit: contain;
  margin-top: -0.5rem;

`;

const MenuBtn = styled.h5`
  font-size:15px;
  font-family: 'Alata', sans-serif;
  color:var(--dark-grayish-blue);
`;

const ImgCart = styled.img`
  content:url(static/icon-cart.svg);
  object-fit: contain;

`;

const ImgUser = styled.img`
  content:url(static/image-avatar.png);
  // width:50px;
  // height:50px;
  width: 2rem;
  margin-left: 0.5rem;
  object-fit: contain;
`;

const HR = styled.hr`
  color:#bbb;
`;

const HamburgerMenu = styled.img`
  content:url(static/icon-menu.svg);
`;

const FlexMenuWrapper = styled.div`
  display:flex;
  align-items:center;
`;


function Menu() {
  const [isOpen, setIsOpen] = useState(false);


  return (
    <Wrapper>
      <MenuList>
        <FlexMenuWrapper>
          <Header />
          <button style={{ background: "transparent", border: "none" }} onClick={() => setIsOpen(true)}>
            <HamburgerMenu />
          </button>
          <InnerMenu isOpen={isOpen} setIsOpen={setIsOpen} />
        </FlexMenuWrapper>
        <FlexMenuWrapper>
          <ImgCart />
          <ImgUser />
        </FlexMenuWrapper>

      </MenuList>
      <HR />
    </Wrapper>

  );

}

export default Menu