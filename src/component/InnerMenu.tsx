import React from "react";
import styled from "styled-components/macro";

const Wrapper = styled.div`
  display: flex;
`;

const MenuBtn = styled.h5`
  font-size: 15px;
  font-family: "Alata", sans-serif;
  color: var(--dark-grayish-blue);

  &:hover {
    cursor: pointer;
    text-decoration: underline;
    text-decoration-color: var(--orange);
    text-decoration-thickness: 30%;
  }
`;

const MenuList = styled.div(
  ({ isOpen }: { isOpen: boolean }) => `
  display:flex;
  gap:20px;
  visibility: ${isOpen ? "visible" : "hidden"};
`
);

function InnerMenu({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: (b: boolean) => void;
}) {
  return (
    <Wrapper>
      <MenuList isOpen={isOpen}>
        <MenuBtn>Collections</MenuBtn>
        <MenuBtn>Men</MenuBtn>
        <MenuBtn>Women</MenuBtn>
        <MenuBtn>About</MenuBtn>
        <MenuBtn>Contact</MenuBtn>
        <button
          style={{ border: "none", background: "transparent" }}
          onClick={() => setIsOpen(false)}
        >
          <img src="/static/icon-close.svg" alt="close" />
        </button>
      </MenuList>
    </Wrapper>
  );
}

export default InnerMenu;
