import React from "react";
import styled, { keyframes } from "styled-components";
import { motion } from "framer-motion";

const ScrollText = () => {
  return (
    <ScrollTextContainer>
      <StyledTextLine
        transition={{ duration: 2 }}
        initial={{ width: "0%", opacity: 0 }}
        animate={{ width: "100%", opacity: 1 }}
      ></StyledTextLine>
      <StyledScrollingText>↓↓ Check out my work ↓↓</StyledScrollingText>
      <StyledTextLine
        transition={{ duration: 2 }}
        initial={{ width: "0%", opacity: 0 }}
        animate={{ width: "100%", opacity: 1 }}
      ></StyledTextLine>
    </ScrollTextContainer>
  );
};

const ScrollTextContainer = styled(motion.div)`
  margin-top: 3rem;
  overflow: hidden;
  padding-bottom: 10rem;
`;

const StyledTextLine = styled(motion.div)`
  width: 100%;
  min-height: 0.1rem;
  background: #1f1f1f;
`;

const scroll = keyframes`
  from {
    left: -30%;
  }

  to {
    /* left: auto; */
    left: 100%;
  }
`;

const StyledScrollingText = styled(motion.p)`
  font-weight: 500;
  position: relative;
  white-space: nowrap;
  animation-name: ${scroll};
  animation-duration: 20s;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
`;

export default ScrollText;
