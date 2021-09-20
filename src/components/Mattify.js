import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";

const Mattify = () => {
  const { pathname } = useLocation();

  return (
    <StyledCardShadow>
      <Detail>
        Mattify was a music player app that I created during an online course I
        was taking for react by Dev Ed. This course taught me a lot about
        thinking in terms of components, and how logic fits into html and css.{" "}
        <br />
        <br /> Technical skills used: HTML/Sass/Javascript (React) <br />
        <br /> Webapp link:
        <a href="https://matinsa7.github.io/music_player/">
          https://matinsa7.github.io/music_player/
        </a>
        <br />
        Github: https://github.com/MatinSa7/music_player
      </Detail>
    </StyledCardShadow>
  );
};

const StyledCardShadow = styled(motion.div)`
  padding-top: 30vh;
  width: 100%;
  min-height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
`;

const Detail = styled(motion.div)`
  width: 80%;
  border-radius: 1rem;
  padding: 2rem 5rem;
  background: white;
  position: absolute;
  left: 10%;
  color: black;
  z-index: 100;
  img {
    width: 100%;
  }
`;

export default Mattify;
