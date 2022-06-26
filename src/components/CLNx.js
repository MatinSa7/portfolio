import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { pageAnimationCard } from "../animation";

const CLNx = () => {
  return (
    <StyledCardShadow>
      <Detail initial="hidden" animate="show" variants={pageAnimationCard}>
        Worked as a team of two to re-design a quick search feature on the U of
        T career portal (CLNx). We first did various collection methods and
        constructed Hierarchal Task Analysis diagrams to understand current
        implementation of feature. We then created low fidelity prototypes and
        performed heuristic evaluations to choose optimal design. After choosing
        our prototype, we performed usability testing and graphically analyzed
        results.
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

export default CLNx;
