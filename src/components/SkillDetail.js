import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";
import { pageAnimationCard } from "../animation";

const SkillDetail = () => {
  const { pathname } = useLocation();
  return (
    <StyledHide>
      <StyledCardShadow>
        <Detail initial="hidden" animate="show" variants={pageAnimationCard}>
          <bold>Languages:</bold> Python, Java, Javascript <br /> <br />
          <bold>Web Dev Skills:</bold> Django/Django Rest Framework, EmberJs, NodeJs, XState, Redux <br /> <br />
          <bold>Data Analytics/ML Skills:</bold> SQL, Pandas, SciKit-Learn, Data Visualization <br /> <br />
          <bold>Creative Tools:</bold> Figma, Adobe Illustrator/Photoshop <br /> <br />
          <bold>Knowledge:</bold> Data structures and algorithms, UI/UX design, Database
          design, Data analytics
        </Detail>
      </StyledCardShadow>
    </StyledHide>
  );
};

const StyledHide = styled.div`
  overflow: hidden;
`;

const StyledCardShadow = styled(motion.div)`
  padding-top: 30vh;
  width: 100%;
  min-height: 200vh;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  @media (max-width: 812px) {
    padding-top: 20vh;
  }
`;

const Detail = styled(motion.div)`
  width: 80%;
  border-radius: 3rem;
  border-style: solid;
  border-width: 3px;
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

export default SkillDetail;
