import React, { useState } from 'react';
import styled from 'styled-components';
import { imageData } from './imageData';

const ImageContainer = styled.div`
  position: relative;
  display: inline-block;
  margin-bottom: 20px;
  cursor: ${(props) => (props.$isNSFW ? 'pointer' : 'default')};
  outline: none;

  &:focus {
    outline: none;
  }

  @media (hover: none) {
    -webkit-tap-highlight-color: transparent;
  }
`;

const ResponsiveImage = styled.img`
  width: 100%;
  max-width: 600px;
  height: auto;
  border: 1px solid black;
  filter: ${(props) => (props.$isBlurred ? 'blur(10px)' : 'none')};
  transition: filter 0.3s;

  @media (min-width: 768px) {
    width: 80%;
  }

  @media (min-width: 1024px) {
    width: 60%;
  }

  &:focus {
    outline: none;
  }
`;

const NSFWWarning = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  background-color: rgba(0, 0, 0, 0.7);
  padding: 10px;
  border-radius: 5px;
  display: ${(props) => (props.$isBlurred ? 'block' : 'none')};
`;

export const Portfolio = () => {
  const [blurred, setBlurred] = useState({});

  const handleImageClick = (index) => {
    setBlurred((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };

  return (
    <div>
      <h2>Leetbeck Portfolio</h2>
      {imageData.map((image, index) => (
        <ImageContainer
          key={index}
          onClick={() => handleImageClick(index)}
          $isNSFW={image.nsfw}
          tabIndex={0} // Adding tabIndex to make it focusable
        >
          <ResponsiveImage
            src={image.src}
            alt={image.alt}
            $isBlurred={image.nsfw && !blurred[index]}
          />
          {image.nsfw && (
            <NSFWWarning $isBlurred={!blurred[index]}>NSFW</NSFWWarning>
          )}
          <p>{image.alt}</p>
          <hr />
        </ImageContainer>
      ))}
    </div>
  );
};
