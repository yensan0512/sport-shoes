import React, { useState } from "react";
import styled from "styled-components/macro";
import ImageSlideShow from "./ImageSlideShow";
import AddCartBtn from "./AddCartBtn";
import QuantityEditor from "./QuantityEditor";

const FlexWrapper = styled.div`
  display: flex;
`;

const FlexContainer = styled.div`
  flex: 50%;
  display: flex;
  flex-direction: column;
  // align-items:center;
  gap: 20px;
`;

const InnerFlexContainer = styled.div`
  display: flex;
  gap: 20px;
`;

const MainImg = styled.img`
  //content:url(static/image-product-1.jpg);
  border-radius: 5%;
  width: 500px;
  height: 500px;
`;

const Thumbnail = styled.img`
  border-radius: 5%;

  &:active {
    cursor: pointer;
    //backdrop-filter:blur(20px);
    transition: 0.5s ease;
    opacity: 0.5;
  }
`;

const Company = styled.h3`
  color: var(--orange);
  text-align: left;
  margin: 200px 0 0 0;
`;

const Header = styled.h1`
  text-align: left;
  margin: 0 380px 0 0;
  font-size: 55px;
`;

const Description = styled.h5`
  text-align: start;
  margin: 0;
  font-size: 20px;
  color: var(--dark-grayish-blue);
  margin: 0 400px 0 0;
`;

const PriceWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const Price = styled.h3`
  text-align: left;
  font-size: 35px;
  margin: 0;
`;

const Discount = styled.div`
  background: var(--pale-orange);
  color: var(--orange);
  font-size: 15px;
  text-align: left;
  margin-left: 20px;
  font-weight: bolder;
  padding: 2px 5px;
  border-radius: 10%;
`;

const OriPrice = styled.div`
  color: var(--dark-grayish-blue);
  text-decoration: line-through;
  text-decoration-color: var(--dark-grayish-blue);
  text-align: left;
`;

const RecBox = styled.div`
  border: 1px solid var(--dark-grayish-blue);
  width: 6vw;
  height: 6vh;
  // background:url(static/icon-minus.svg);
`;

const BtnSubmit = styled.div`
  background: var(--orange);
  position: relative;
`;

const IconCart = styled.img`
  content: url(static/icon-cart.svg);
  position: absolute;
`;

const BtnLabel = styled.h3`
  color: var(--white);
`;

const QuantityFlexWrapper = styled.div`
  display: flex;
  gap: 100px;
`;

function Container({
  itemInCart,
  setItemInCart,
  Initiation,
}: {
  itemInCart: number;
  setItemInCart: (n: number) => void;
  Initiation: () => void;
}) {
  const [index, setIndex] = useState(0);

  const handleThumbnailClick = (thumbnail: number) => {
    setIndex(thumbnail);
  };

  let photo = "";
  if (index === 0) {
    photo = "static/image-product-1.jpg";
  } else if (index === 1) {
    photo = "static/image-product-2.jpg";
  } else if (index === 2) {
    photo = "static/image-product-3.jpg";
  } else {
    photo = "static/image-product-4.jpg";
  }

  return (
    <FlexWrapper>
      <FlexContainer>
        <ImageSlideShow
          handleThumbnailClick={handleThumbnailClick}
          photo={photo}
        />
      </FlexContainer>
      <FlexContainer>
        <Company>SNEAKER COMPANY</Company>
        <Header>Fall Limited Edition Sneakers</Header>
        <Description>
          The low-profile sneakers are your perfect casual wear companion.
          Featuring a durable rubber outer sole, they'll withstand everything
          the weather can offer.{" "}
        </Description>
        <PriceWrapper>
          <Price>$125.00</Price>
          <Discount>50%</Discount>
        </PriceWrapper>
        <OriPrice>$250.00</OriPrice>

        <QuantityFlexWrapper>
          {/* <SquareBox style={{ backgroundImage: "static/icon-minus.svg" }} onClick={() => index - 1}></SquareBox> */}
          {/* <RecBox>
            {num}
          </RecBox> */}
          <QuantityEditor
            itemInCart={itemInCart}
            setItemInCart={setItemInCart}
          />

          {/* <BtnSubmit>
            <FlexWrapper>
              <IconCart />
              <BtnLabel>Add to Cart</BtnLabel>
            </FlexWrapper>
          </BtnSubmit> */}
          <AddCartBtn Initiation={Initiation} />
        </QuantityFlexWrapper>
      </FlexContainer>
    </FlexWrapper>
  );
}

export default Container;
