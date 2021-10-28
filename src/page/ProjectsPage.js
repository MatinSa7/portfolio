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
import { lineAnimation6 } from "../animation";
import ExamScheduling from "../components/ExamScheduling";
import StableMatching from "../components/StableMatching";
import CLNx from "../components/CLNx";
import Pulsate from "../components/Pulsate";
import Mattify from "../components/Mattify";
import Gym from "../components/Gym";
import Website from "../components/Website";
import Ignite from "../components/Ignite";

const ProjectsPage = () => {
  const [element, controls] = useScroll();
  const [clickStatus1, setClickStatus1] = useState(false);
  const [clickStatus2, setClickStatus2] = useState(false);
  const [clickStatus3, setClickStatus3] = useState(false);
  const [clickStatus4, setClickStatus4] = useState(false);
  const [clickStatus5, setClickStatus5] = useState(false);
  const [clickStatus6, setClickStatus6] = useState(false);
  const [clickStatus7, setClickStatus7] = useState(false);
  const [clickStatus8, setClickStatus8] = useState(false);
  const [offset, setOffset] = useState(0);

  /*useEffect(() => {
    window.onscroll = () => {
      setOffset(window.pageYOffset);
      setClickStatus(0);
    };
  }, []); */

  return (
    <StyledProjectsPageContainer
      variants={scrollReveal}
      ref={element}
      animate={controls}
      initial="hidden"
    >
      <StyledLineContainer>
        <h1>Projects.</h1>
        <StyledLine
          initial="hidden"
          animate={controls}
          ref={element}
          variants={lineAnimation6}
        ></StyledLine>
      </StyledLineContainer>
      <StyledCardContainer onClick={() => setClickStatus1(!clickStatus1)}>
        {clickStatus1 === true && <StableMatching />}
        <motion.p whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} href="">
          Stable Matching Solver
        </motion.p>
      </StyledCardContainer>
      <StyledCardContainer onClick={() => setClickStatus2(!clickStatus2)}>
        {clickStatus2 === true && <Pulsate />}
        <motion.p whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} href="">
          Pulsate
        </motion.p>
      </StyledCardContainer>
      <StyledCardContainer onClick={() => setClickStatus5(!clickStatus5)}>
        {clickStatus5 === true && <Mattify />}
        <motion.p whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} href="">
          Mattify
        </motion.p>
      </StyledCardContainer>
      <StyledCardContainer onClick={() => setClickStatus3(!clickStatus3)}>
        {clickStatus3 === true && <ExamScheduling />}
        <motion.p
          href="/Exam"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          Exam Invigilation Scheduling
        </motion.p>
      </StyledCardContainer>
      <StyledCardContainer onClick={() => setClickStatus8(!clickStatus8)}>
        {clickStatus8 === true && <Ignite />}
        <motion.p whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} href="">
          Ignite
        </motion.p>
      </StyledCardContainer>
      <StyledCardContainer onClick={() => setClickStatus4(!clickStatus4)}>
        {clickStatus4 === true && <CLNx />}
        <motion.p whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} href="">
          CLNx Career Portal
        </motion.p>
      </StyledCardContainer>

      <StyledCardContainer onClick={() => setClickStatus6(!clickStatus6)}>
        {clickStatus6 === true && <Gym />}
        <motion.p whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} href="">
          Gym Booking Automation
        </motion.p>
      </StyledCardContainer>
      <StyledCardContainer onClick={() => setClickStatus7(!clickStatus7)}>
        {clickStatus7 === true && <Website />}
        <motion.p whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} href="">
          This site
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
  background: #16db65;
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
  margin-top: 2vh;
  min-height: 20vh;
  p {
    color: black;
    font-size: calc(1.5vw + 1rem);
    text-decoration: underline;
  }
  @media (max-width: 812px) {
    min-height: 10vh;
  }
`;

const StyledImageContainer = styled(motion.div)`
  margin-left: 10rem;
`;

export default ProjectsPage;
