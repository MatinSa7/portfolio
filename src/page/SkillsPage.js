import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";

const SkillsPage = () => {
  return (
    <StyledSkillsContainer>
      <StyledSkill1></StyledSkill1>
      <StyledSkill2></StyledSkill2>
      <StyledSkill3>
        <h1>Skills.</h1>
      </StyledSkill3>
      <StyledSkill4></StyledSkill4>
    </StyledSkillsContainer>
  );
};

export const StyledSkillsContainer = styled(motion.div)`
  width: 80%;
  margin: auto;
  min-height: 80vh;
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

export default SkillsPage;
