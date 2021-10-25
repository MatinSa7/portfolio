import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";
import { pageAnimationCard } from "../animation";

const SkillDetail = () => {
  const { pathname } = useLocation();
  return (
    <StyledHide>
      <StyledCardShadow>
        <Detail initial="hidden" animate="show" variants={pageAnimationCard}>
          Technical Tools: Java (JDBC, Gurobi), Python (Selenium, Pandas, Data
          visualization), MySQL, HTML, CSS (StyledComponents, Sass), Javascript
          (React, Axios, Redux, framer-motion) <br /> <br />
          Creative Tools: Figma, Adobe Illustrator/Photoshop <br /> <br />
          Knowledge: Data structures and algorithms, basic descriptive and
          inferential statistics, deterministic/stochastic operations research
        </Detail>
      </StyledCardShadow>
    </StyledHide>
  );
};

const StyledHide = styled.div`
  overflow: hidden;
`;

const StyledCardShadow = styled(motion.div)`
  padding-top: 30vh;
  width: 100%;
  min-height: 200vh;
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

export default SkillDetail;
