import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";
import { pageAnimationCard } from "../animation";

const Website = () => {
  const { pathname } = useLocation();

  return (
    <StyledCardShadow>
      <Detail initial="hidden" animate="show" variants={pageAnimationCard}>
        I created this website from scratch (no templates) using all the front
        end skills I've self learned! <br />
        <br />
        Technical skills used: HTML/StyledComponents/Javascript (React, framer
        motion)
        <br />
        <br />
        Github:{" "}
        <a target="_blank" href="https://github.com/MatinSa7/portfolio">
          https://github.com/MatinSa7/portfolio
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
  border-style: solid;
  border-width: 2.2px;
  box-shadow: 8px 10px;
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

export default Website;
