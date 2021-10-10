import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";
import { pageAnimationCard } from "../animation";

const Ignite = () => {
  const { pathname } = useLocation();

  return (
    <StyledCardShadow>
      <Detail initial="hidden" animate="show" variants={pageAnimationCard}>
        Ignite was a game information web app that I created during an online
        course I was taking by Dev Ed. Working on this project made me familiar
        with using Axios to fetch data from APIs, as well as using Redux and
        becoming familiar with state management. <br />
        <br /> Technical skills used: HTML/StyledComponents/Javascript (React,
        Axios, Redux) <br />
        <br /> Webapp link:{" "}
        <a target="_blank" href="https://matinsa7.github.io/ignite/">
          https://matinsa7.github.io/ignite/
        </a>
        <br />
        Github:{" "}
        <a target="_blank" href="https://github.com/MatinSa7/ignite">
          https://github.com/MatinSa7/ignite
        </a>
      </Detail>
    </StyledCardShadow>
  );
};

const StyledCardShadow = styled(motion.div)`
  a {
    color: black;
  }
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
  border-radius: 3rem;
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

export default Ignite;
