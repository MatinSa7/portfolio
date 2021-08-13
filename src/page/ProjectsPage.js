import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";

const ProjectsPage = () => {
  return (
    <StyledProjectsPageContainer>
      <h1>Projects:</h1>
      <StyledCardContainer>
        <motion.a href="" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          test
        </motion.a>
      </StyledCardContainer>
      <StyledCardContainer>
        <motion.a whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} href="">
          test
        </motion.a>
      </StyledCardContainer>
      <StyledCardContainer>
        <motion.a whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} href="">
          test
        </motion.a>
      </StyledCardContainer>
    </StyledProjectsPageContainer>
  );
};

const StyledProjectsPageContainer = styled(motion.div)`
  min-height: 100vh;
  width: 80%;
  margin: auto;
  h1 {
    margin-top: 10vh;
    font-weight: 500;
    font-size: calc(4vw + 1rem);
  }
`;

const StyledCardContainer = styled(motion.div)`
  display: flex;
  align-items: center;
  margin-top: 5vh;
  min-height: 20vh;
  a {
    color: black;
    font-size: calc(1.5vw + 1rem);
  }
`;

const StyledImageContainer = styled(motion.div)``;

export default ProjectsPage;
