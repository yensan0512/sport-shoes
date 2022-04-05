import React from "react";
import styled from "styled-components/macro";

const Wrapper = styled.div`

`;

const MenuList = styled.div`
  display:flex;
  justify-content:center;
  gap:40px;
`;

const Header = styled.img`
  // font-size:30px;
  // font-family: 'Alata', sans-serif;
  content:url(static/logo.svg);
  width:50px;
  height:50px
`;

const MenuBtn = styled.h5`
  font-size:15px;
  font-family: 'Alata', sans-serif;
`;

const ImgCart = styled.img`
  content:url(static/icon-cart.svg);
  // object-fit: cover;
  width:100px;
`;

const ImgUser = styled.img`
  content:url(static/image-avatar.png);
`;

const HR = styled.hr`
  color:#bbb;
`;

function Menu() {
  return (
    <Wrapper>
      <MenuList>
        <Header />
        <MenuBtn>Collections</MenuBtn>
        <MenuBtn>Men</MenuBtn>
        <MenuBtn>Women</MenuBtn>
        <MenuBtn>About</MenuBtn>
        <MenuBtn>Contact</MenuBtn>
        <ImgCart />
        <ImgUser />

      </MenuList>
      <HR />
    </Wrapper>

  );

}

export default Menu