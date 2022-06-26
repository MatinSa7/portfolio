import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";
import { pageAnimationCard } from "../animation";

const ExamScheduling = () => {
  return (
    <StyledCardShadow>
      <Detail initial="hidden" animate="show" variants={pageAnimationCard}>
        In this project, I worked in a group of four to work with the U of T
        registrar office to create the flow and a basic simulation for exam
        invigilation scheduling. We used a regret system where exam invigilators
        could rank their order of preference of certain shifts, and were
        assigned an optimal shift based on a calculated three point score.{" "}
        <br />
        <br />
        Technical tools used: Python <br />
        Other skills: design iterations after meeting with client, flow diagram
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

export default ExamScheduling;
