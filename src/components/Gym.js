import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";

const Gym = () => {
  const { pathname } = useLocation();

  return (
    <StyledCardShadow>
      <Detail>
        Picture this, you're at the weird time where covid cases are high, but
        non essential places like the gym are still open, but at a 10 person
        capacity where prior booking is mandatory to get in. Everyone's fighting
        for time slots as the initial lucky ten cancel last minute. I really
        want to go to the gym, but I hate wasting time to book, and I notice
        they have no captcha system. What do I do? I go home and create a bot to
        book for me everyday. All the slots I need are mine. <br />
        <br />
        Technical skills used: Python (Selenium)
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

export default Gym;