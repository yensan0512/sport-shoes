import React from "react";
import styled from "styled-components/macro";

const Wrapper = styled.div`
  align-self:center;
`;

const InnerFlexContainer = styled.div`
  display:flex;
  gap:20px;
  
`;

const MainImg = styled.img`
  //content:url(static/image-product-1.jpg);
  border-radius:5%;
  width:470px;
  height:470px;
  margin-top:100px;
  margin-bottom:25px;
`;

const Thumbnail = styled.img`
  border-radius:10%;
  width:100px;
  height:100px;

  &:hover{
    border: 5px solid var(--orange);
    cursor:pointer;
    //backdrop-filter:blur(20px);
    transition: .5s ease;
    opacity: 0.3;
    // backdrop-filter: blur(50%);
    

  }
`;

function ImageSlideShow({ photo, handleThumbnailClick }: {
  photo: string,
  handleThumbnailClick: (s: number) => void
}) {
  return (
    <Wrapper>
      <MainImg src={photo} />
      <InnerFlexContainer>
        <Thumbnail src="static/image-product-1-thumbnail.jpg" onClick={() => handleThumbnailClick(0)}></Thumbnail>
        <Thumbnail src="static/image-product-2-thumbnail.jpg" onClick={() => handleThumbnailClick(1)}></Thumbnail>
        <Thumbnail src="static/image-product-3-thumbnail.jpg" onClick={() => handleThumbnailClick(2)}></Thumbnail>
        <Thumbnail src="static/image-product-4-thumbnail.jpg" onClick={() => handleThumbnailClick(3)}></Thumbnail>
      </InnerFlexContainer>
    </Wrapper>
  );
}


export default ImageSlideShow