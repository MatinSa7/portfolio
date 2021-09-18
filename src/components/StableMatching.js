import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";

const StableMatching = () => {
  const { pathname } = useLocation();

  return (
    <StyledCardShadow>
      <Detail>
        In this project, I implemented the Gale Shapley algorithm to determine
        optimal matching between students and universities. To do so, data was
        read from large csv files where student and school objects were created
        to hold information as well as preferences going both ways. With these,
        a smp (stable matching problem) solver object was instantiated to find
        the optimal matching and minimize regret using the Gale Shapley
        algorithm. <br />
        <br />
        Technical tools used: Java, Excel <br /> Other skills: data structures
        and algorithms
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

export default StableMatching;
