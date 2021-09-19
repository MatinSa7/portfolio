import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";

const Pulsate = () => {
  const { pathname } = useLocation();

  return (
    <StyledCardShadow>
      <Detail>
        Pulsate is a basic productivity website where you can journal, use a
        pomodoro timer to work, as well as listen to brief headspace mediations
        audio. <br />
        <br /> Technical skills used: Figma, HTML/CSS/Javascript (React - styled
        components, Hash router, framer-motion, basic svg animations)
        <br />
        <br />
        Webapp link: https://matinsa7.github.io/pulsate/ <br />
        Github: https://github.com/MatinSa7/music_player
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
  border-radius: 1rem;
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

export default Pulsate;
