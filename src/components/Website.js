import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";

const Website = () => {
  const { pathname } = useLocation();

  return (
    <StyledCardShadow>
      <Detail>
        I created this website from scratch (no templates) using all the front
        end skills I've self learned! <br />
        <br />
        Technical skills used: HTML/CSS/Javascript (React-styled components,
        framer motion)
        <br />
        <br />
        Github: https://github.com/MatinSa7/portfolio
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

export default Website;
