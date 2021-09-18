import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";
import invigilationscript from "../image/invig.png";
import schedulephoto from "../image/schedule photo.png";
import smpsolver from "../image/smpsolver.png";
import lowfidproto from "../image/lowfidproto.png";
import clnxdefault from "../image/clnxdefault.png";
import { useScroll } from "../components/useScroll";
import { scrollReveal } from "../animation";
import { lineAnimation5 } from "../animation";
import ExamScheduling from "../components/ExamScheduling";
import StableMatching from "../components/StableMatching";
import CLNx from "../components/CLNx";
import Pulsate from "../components/Pulsate";
import Mattify from "../components/Mattify";
import Gym from "../components/Gym";

const ProjectsPage = () => {
  const [element, controls] = useScroll();
  const [clickStatus, setClickStatus] = useState(0);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    window.onscroll = () => {
      setOffset(window.pageYOffset);
      setClickStatus(0);
      console.log(clickStatus);
    };
  }, []);

  return (
    <StyledProjectsPageContainer
      variants={scrollReveal}
      ref={element}
      animate={controls}
      initial="hidden"
      onScroll={() => setClickStatus(0)}
    >
      <h1>Projects:</h1>
      <StyledCardContainer onClick={() => setClickStatus(1)}>
        {clickStatus === 1 && <ExamScheduling />}
        <motion.p
          href="/Exam"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          Exam Invigilation Scheduling
        </motion.p>
      </StyledCardContainer>
      <StyledCardContainer onClick={() => setClickStatus(2)}>
        {clickStatus === 2 && <StableMatching />}
        <motion.p whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} href="">
          Stable Matching Solver
        </motion.p>
      </StyledCardContainer>
      <StyledCardContainer onClick={() => setClickStatus(3)}>
        {clickStatus === 3 && <CLNx />}
        <motion.p whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} href="">
          CLNx Career Portal
        </motion.p>
      </StyledCardContainer>
      <StyledCardContainer onClick={() => setClickStatus(4)}>
        {clickStatus === 4 && <Pulsate />}
        <motion.p whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} href="">
          Pulsate
        </motion.p>
      </StyledCardContainer>
      <StyledCardContainer onClick={() => setClickStatus(5)}>
        {clickStatus === 5 && <Mattify />}
        <motion.p whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} href="">
          Mattify
        </motion.p>
      </StyledCardContainer>
      <StyledCardContainer onClick={() => setClickStatus(6)}>
        {clickStatus === 6 && <Gym />}
        <motion.p whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} href="">
          Gym Booking Automation
        </motion.p>
      </StyledCardContainer>
    </StyledProjectsPageContainer>
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
  p {
    color: black;
    font-size: calc(1.5vw + 1rem);
    text-decoration: underline;
  }
`;

const StyledImageContainer = styled(motion.div)`
  margin-left: 10rem;
`;

export default ProjectsPage;
