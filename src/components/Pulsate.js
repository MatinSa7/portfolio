import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";
import { pageAnimationCard } from "../animation";

const Pulsate = () => {
  const { pathname } = useLocation();

  return (
    <StyledCardShadow>
      <Detail initial="hidden" animate="show" variants={pageAnimationCard}>
        A landing page I created for Pulsate, a productivity themed app.{" "}
        <a target="_blank" href="https://matinsa7.github.io/pulsate/">
          Try it here!{" "}
        </a>{" "}
        <br />
        <br /> Technical skills used: Figma, HTML/StyledComponents/Javascript
        (React, framer-motion, basic svg animations)
        <br />
        <br />
        Github:{" "}
        <a target="_blank" href="https://github.com/MatinSa7/pulsate">
          https://github.com/MatinSa7/pulsate
        </a>
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
  @media (max-width: 812px) {
    padding-top: 10vh;
  }
`;

const Detail = styled(motion.div)`
  width: 80%;
  border-radius: 3rem;
  padding: 2rem 5rem;
  background: white;
  position: absolute;
  left: 10%;
  color: black;
  z-index: 100;
  a {
    font-size: 1rem;
    color: black;
    word-wrap: break-word;
  }
  img {
    width: 100%;
  }
  @media (max-width: 812px) {
    width: 90%;
    padding: 2rem 3rem;
    margin: auto;
    left: 5%;
  }
`;

export default Pulsate;
