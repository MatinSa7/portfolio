import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";
import { lineAnimation4 } from "../animation";

import { useScroll } from "../components/useScroll";
import { scrollReveal } from "../animation";

const SkillsPage = () => {
  const [element, controls] = useScroll();
  const [hoverStatus, setHoverStatus] = useState(0);
  return (
    <StyledSkillsContainer
      variants={scrollReveal}
      ref={element}
      animate={controls}
      initial="hidden"
    >
      <a href="/Skills">
        <StyledSkill0></StyledSkill0>
        <StyledSkill1></StyledSkill1>
        <StyledSkill2>
          <StyledLineContainer>
            <h1>Skills.</h1>
            <StyledLine
              initial="hidden"
              animate={controls}
              ref={element}
              variants={lineAnimation4}
            ></StyledLine>
          </StyledLineContainer>
          <p>(Click for Details)</p>
        </StyledSkill2>
        <StyledSkill3></StyledSkill3>
        <StyledSkill4></StyledSkill4>
        <StyledSkill5></StyledSkill5>
      </a>
    </StyledSkillsContainer>
  );
};

const StyledLineContainer = styled(motion.div)`
  position: relative;
  margin: 0.5rem 0;
`;

const StyledLine = styled(motion.div)`
  position: absolute;
  background: #ff3f00;
  bottom: 15%;
  z-index: -1;
  height: 25%;
  width: 25%;
`;

export const StyledSkillsContainer = styled(motion.div)`
  width: 80%;
  margin: auto;
  min-height: 80vh;
  a {
    text-decoration: none;
    color: black;
  }
`;

export const StyledSkill0 = styled(motion.div)`
  cursor: url("https://i.imgur.com/pVes9qo.png"), auto;
  min-height: 10vh;
`;

export const StyledSkill1 = styled(motion.div)`
  cursor: url("https://i.imgur.com/rzRUvGM.png"), auto;
  min-height: 10vh;
  width: 100%;
  h1 {
    font-weight: 300;
    width: 100%;
    font-size: calc(8vw + 1rem);
  }
`;

export const StyledSkill2 = styled(motion.div)`
  cursor: url("https://i.imgur.com/VwMVQvX.png"), auto;
  min-height: 10vh;
  width: 100%;
  h1 {
    font-weight: 300;
    font-size: calc(8vw + 1rem);
  }
  p {
    padding-left: 0.8rem;
    font-weight: 400;
    font-size: calc(1vw + 0.2rem);
  }
`;

export const StyledSkill3 = styled(motion.div)`
  cursor: url("https://i.imgur.com/yVTX9gV.png"), auto;
  min-height: 10vh;
  width: 100%;
  h1 {
    font-weight: 300;
    font-size: calc(8vw + 1rem);
  }
`;

export const StyledSkill4 = styled(motion.div)`
  cursor: url("https://i.imgur.com/uqkkqaQ.png"), auto;
  min-height: 10vh;
  width: 100%;
  h1 {
    font-weight: 300;
    font-size: calc(8vw + 1rem);
  }
`;

export const StyledSkill5 = styled(motion.div)`
  cursor: url("https://i.imgur.com/ImkgrQ3.png"), auto;
  min-height: 10vh;
`;

export default SkillsPage;
