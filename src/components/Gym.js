import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";
import { pageAnimationCard } from "../animation";

const Gym = () => {
  const { pathname } = useLocation();

  return (
    <StyledCardShadow>
      <Detail initial="hidden" animate="show" variants={pageAnimationCard}>
        Picture this. You're at the time when covid cases are high but non
        essential places like the gym are still open at a 10 person capacity
        where prior booking is mandatory to get in. Everyone's fighting for time
        slots as the initial lucky ten cancel last minute. Bookings dissapear
        like{" "}
        <a
          href="https://www.nssmag.com/en/fashion/18056/in-quanti-secondi-vanno-sold-out-gli-item-supreme"
          target="_blank"
        >
          Supreme drops
        </a>{" "}
        but I notice they have no captcha system. The operation couldn't be any
        more clear. After going home and creating a bot to book for me, all the
        slots I need are mine. <br />
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
  a {
    font-size: 1rem;
    color: black;
    word-wrap: break-word;
  }
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

export default Gym;
