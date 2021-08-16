import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";
import invigilationscript from "../image/invig.png";
import schedulephoto from "../image/schedule photo.png";
import smpsolver from "../image/smpsolver.png";


const ProjectsPage = () => {
  return (
    <StyledProjectsPageContainer>
      <h1>Projects:</h1>
      <StyledCardContainer>
        <motion.a href="" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          Exam Invigilation Scheduling
        </motion.a>
        <StyledImageContainer>
          <img src={invigilationscript} alt="" />
          <img src={schedulephoto} alt="" />
        </StyledImageContainer>
      </StyledCardContainer>
      <StyledCardContainer>
        <motion.a whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} href="">
          Stable Matching Solver
        </motion.a>
        <StyledImageContainer>
          <img src={smpsolver} alt="" />
        </StyledImageContainer>
      </StyledCardContainer>
      <StyledCardContainer>
        <motion.a whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} href="">
          CLNx Career Portal
        </motion.a>
      </StyledCardContainer>
      <StyledCardContainer>
        <motion.a whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} href="">
          Pulsate
        </motion.a>
      </StyledCardContainer>
      <StyledCardContainer>
        <motion.a whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} href="">
          Mattify
        </motion.a>
      </StyledCardContainer>
      <StyledCardContainer>
        <motion.a whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} href="">
          Gym Booking Automation
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

const StyledImageContainer = styled(motion.div)`
  margin-left: 10rem;
`;

export default ProjectsPage;
