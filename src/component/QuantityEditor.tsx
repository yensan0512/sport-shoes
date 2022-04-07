import React from "react";
import styled from "styled-components/macro";

const QttSelectorContainer = styled.div`
  width: auto;
  height: 4rem;

  padding: 0.5rem;

  border-radius: 0.5rem;

  display: flex;
  align-items: center;
  
  background: var(--light-grayish-blue);

  button {
    border: none;

    background: transparent;
    cursor:pointer;
  }

  button:first-child {
    padding-bottom: 0.5rem
  }

  input {
    width: 100%;

    text-align: center;
    font-size: 1rem;
    font-weight: 700;

    border: none;

    background: transparent;
  }
`

function QuantityEditor() {

  return (
    <QttSelectorContainer>
      <button>
        <img src="static/icon-minus.svg" alt="" />
      </button>
      <input type="text" value="0" />
      <button>
        <img src="static/icon-plus.svg" alt="" />
      </button>
    </QttSelectorContainer>
  );
}
export default QuantityEditor