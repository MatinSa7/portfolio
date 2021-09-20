import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";
import { pageAnimationCard } from "../animation";

const ExamScheduling = () => {
  const { pathname } = useLocation();

  return (
    <StyledCardShadow>
      <Detail initial="hidden" animate="show" variants={pageAnimationCard}>
        In this project, I worked in a group of four to work with client Khoan
        Doan of the U of T registrar office to create flow and basic simulation
        for exam invigilation scheduling. We used a basic regret system where
        exam invigilators could rank their order of preference of certain
        shifts, and by creating a score out of 3 the shift was given depending
        on their relative ranking. <br />
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
`;

export default ExamScheduling;
