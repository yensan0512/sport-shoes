import React, { useState } from "react";
import styled from "styled-components/macro";
import ImageSlideShow from "./ImageSlideShow";

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
  text-align:left;
`;

const Header = styled.h1`
  text-align:left;
`;

const Description = styled.h5`
  text-align:start;
`;

const PriceWrapper = styled.div`
  display:flex;
`;

const Price = styled.h3`
  text-align:left;
`;

const Discount = styled.div`
  background:var(--pale-orange);
  color:var(--orange);
  font-size:13px;
  text-align:left;
`;

const OriPrice = styled.div`
  color:var(--dark-grayish-blue);
  text-decoration: line-through;
  text-decoration-color:var(--dark-grayish-blue);
  text-align:left;
`;

const SquareBox = styled.div`
  border:1px solid var(--dark-grayish-blue);
  width:3vw;
  height:6vh;
  background-size: 100%;
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

  const handleThumbnailClick = (thumbnail: number) => {
    setIndex(thumbnail);
  }

  let photo = "";
  if (index === 0) {
    photo = "static/image-product-1.jpg";
  }
  else if (index === 1) {
    photo = "static/image-product-2.jpg";
  }
  else if (index === 2) {
    photo = "static/image-product-3.jpg";
  }
  else {
    photo = "static/image-product-4.jpg";
  }

  return (
    <FlexWrapper>
      <FlexContainer>
        <ImageSlideShow
          handleThumbnailClick={handleThumbnailClick}
          photo={photo} />
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
          <SquareBox style={{ backgroundImage: "static/icon-minus.svg", backgroundRepeat: "no-repeat", backgroundPosition: "center center" }} onClick={() => index - 1}></SquareBox>
          <SquareBox>{index}</SquareBox>
          <SquareBox style={{ backgroundImage: "static/icon-plus.svg" }} onClick={() => index + 1}></SquareBox>

          <BtnSubmit>
            <FlexWrapper>
              <IconCart />
              <BtnLabel>Add to Cart</BtnLabel>
            </FlexWrapper>
          </BtnSubmit>
        </FlexWrapper>
      </FlexContainer >

    </FlexWrapper >

  );

}

export default Container