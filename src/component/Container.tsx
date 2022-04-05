import React, { useState } from "react";
import styled from "styled-components/macro";

const FlexWrapper = styled.div`
  display:flex;
`;

const FlexContainer = styled.div`
  flex:50%;
  display:flex;
  flex-direction:column;
  align-items:center;
  gap:20px;
`;

const InnerFlexContainer = styled.div`
  display:flex;
  gap:20px;
`;

const MainImg = styled.img`
  //content:url(static/image-product-1.jpg);
  border-radius:5%;
  width:500px;
  height:500px;
`;

const Thumbnail = styled.img`
  border-radius:5%;

  &:active{
    cursor:pointer;
    //backdrop-filter:blur(20px);
    transition: .5s ease;
    opacity: 0.5;

  }
`;

const Company = styled.h3`
  color:var(--orange);
`;

const Header = styled.h1`

`;

const Description = styled.h5`

`;

const PriceWrapper = styled.div`
  display:flex;
`;

const Price = styled.h3`

`;

const Discount = styled.div`
  background:var(--pale-orange);
  color:var(--orange);
  font-size:13px;
`;

const OriPrice = styled.div`
  color:var(--dark-grayish-blue);
  text-decoration: line-through;
  text-decoration-color:var(--dark-grayish-blue);
`;

const SquareBox = styled.div`
  border:1px solid var(--dark-grayish-blue);
  width:3vw;
  height:6vh;
`;

const BtnSubmit = styled.div`
  background:var(--orange);
  position:relative;
`;

const IconCart = styled.img`
  content:url(static/icon-cart.svg);
  position:absolute;
`;

const BtnLabel = styled.h3`
  color:var(--white);
`;

function Container() {

  const [index, setIndex] = useState(0);

  let photo = "";
  if (index === 0) {
    photo = "static/image-product-1.jpg";
  }
  else if (index === 1) {
    photo = "static/image-product-2.jpg";
  }
  else if (index === 1) {
    photo = "static/image-product-3.jpg";
  }
  else {
    photo = "static/image-product-4.jpg";
  }

  return (
    <FlexWrapper>
      <FlexContainer>
        <MainImg src={photo} />
        <InnerFlexContainer>
          <Thumbnail src="static/image-product-1-thumbnail.jpg" onClick={() => setIndex(0)}></Thumbnail>
          <Thumbnail src="static/image-product-2-thumbnail.jpg" onClick={() => setIndex(1)}></Thumbnail>
          <Thumbnail src="static/image-product-3-thumbnail.jpg" onClick={() => setIndex(2)}></Thumbnail>
          <Thumbnail src="static/image-product-4-thumbnail.jpg" onClick={() => setIndex(3)}></Thumbnail>
        </InnerFlexContainer>
      </FlexContainer>
      <FlexContainer>
        <Company>SNEAKER COMPANY</Company>
        <Header>Full Limited Edition Sneakers</Header>
        <Description>The low profile </Description>
        <PriceWrapper>
          <Price>$125.00</Price>
          <Discount>50%</Discount>
        </PriceWrapper>
        <OriPrice>$250.00</OriPrice>

        <FlexWrapper>
          <SquareBox style={{ background: "static/icon-minus.svg" }}></SquareBox>
          <SquareBox>0</SquareBox>
          <SquareBox style={{ background: "static/icon-plus.svg" }}></SquareBox>

          <BtnSubmit>
            <IconCart />
            <BtnLabel>Add to Cart</BtnLabel>
          </BtnSubmit>
        </FlexWrapper>
      </FlexContainer >

    </FlexWrapper >

  );

}

export default Container