import React, { useState, useEffect, useRef } from "react";
import styled, { keyframes } from "styled-components";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";
import { lineAnimation4 } from "../animation";
import SkillDetail from "../components/SkillDetail";
import { useInView } from "react-intersection-observer";

import { useScroll } from "../components/useScroll";
import { scrollReveal } from "../animation";

import Typewriter from "typewriter-effect";

const SkillsPage = () => {
  const [ref, isVisibile] = useInView({ threshold: 0.2 });
  const [element, controls] = useScroll();
  const [hoverStatus, setHoverStatus] = useState(0);
  const [clickStatusSkill, setClickStatusSkill] = useState(false);
  const [offset, setOffset] = useState(0);

  return (
    <StyledSkillsContainer
      variants={scrollReveal}
      ref={element}
      animate={controls}
      initial="hidden"
      onClick={() => setClickStatusSkill(!clickStatusSkill)}
    >
      {clickStatusSkill === true && <SkillDetail />}
      <StyledSkill2>
        <StyledLineContainer>
          <h1>Skills.</h1>
          <StyledLine
            initial="hidden"
            animate={controls}
            ref={element}
            variants={lineAnimation4}
          ></StyledLine>
        </StyledLineContainer>
        <p>(Click for Details)</p>
      </StyledSkill2>
      <OuterSkillDescription ref={ref}>
        <TypeWrittenHeading>
          {isVisibile === true && (
            <Typewriter
              options={{ cursorClassName: "Typewriter", delay: 75 }}
              onInit={(typewriter) => {
                typewriter.pauseFor(0).typeString("Java.").start();
              }}
            />
          )}
        </TypeWrittenHeading>
        <TypeWrittenHeading>
          {isVisibile === true && (
            <Typewriter
              options={{ cursorClassName: "Typewriter", delay: 75 }}
              onInit={(typewriter) => {
                typewriter.pauseFor(700).typeString("Python.").start();
              }}
            />
          )}
        </TypeWrittenHeading>
        <TypeWrittenHeading>
          {isVisibile === true && (
            <Typewriter
              options={{ cursorClassName: "Typewriter", delay: 75 }}
              onInit={(typewriter) => {
                typewriter.pauseFor(1400).typeString("SQL.").start();
              }}
            />
          )}
        </TypeWrittenHeading>
        <TypeWrittenHeading>
          {isVisibile === true && (
            <Typewriter
              options={{ cursorClassName: "Typewriter", delay: 75 }}
              onInit={(typewriter) => {
                typewriter
                  .pauseFor(1900)
                  .typeString("HTNK/CS")
                  .start()
                  .pauseFor(120)
                  .deleteChars(5)
                  .pauseFor(100)
                  .typeString("ML/CSS")
                  .pauseFor(50)
                  .typeString("/JS.");
              }}
            />
          )}
        </TypeWrittenHeading>
      </OuterSkillDescription>
    </StyledSkillsContainer>
  );
};

const TypeWrittenHeading = styled(motion.div)`
  font-size: calc(1rem + 0.8vw);
  @media (max-width: 437px) {
    font-size: calc(0.8rem);
  }
`;

const OuterSkillDescription = styled(motion.div)`
  padding-top: 1rem;
  font-size: 1rem;
`;

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

export const StyledSkillsContainer = styled(motion.div)`
  @media (max-width: 437px) {
    min-height: 25vh;
  }
  min-height: 60vh;
  display: flex;
  width: 80%;
  margin: auto;

  a {
    text-decoration: none;
    color: black;
  }
`;

export const StyledSkill2 = styled(motion.div)`
  /*cursor: url("https://i.imgur.com/VwMVQvX.png"), auto;*/
  min-height: 10vh;
  width: 60%;
  h1 {
    font-weight: 300;
    font-size: calc(8vw + 1rem);
  }
  p {
    padding-left: 0.8rem;
    font-weight: 400;
    font-size: calc(1vw + 0.2rem);
  }
`;

export const StyledSkill0 = styled(motion.div)`
  /*cursor: url("https://i.imgur.com/pVes9qo.png"), auto;*/
  min-height: 10vh;
`;

export const StyledSkill1 = styled(motion.div)`
  /*cursor: url("https://i.imgur.com/rzRUvGM.png"), auto;*/
  min-height: 10vh;
  width: 100%;
  h1 {
    font-weight: 300;
    width: 100%;
    font-size: calc(8vw + 1rem);
  }
`;

export const StyledSkill3 = styled(motion.div)`
  /*cursor: url("https://i.imgur.com/yVTX9gV.png"), auto;*/
  min-height: 10vh;
  width: 100%;
  h1 {
    font-weight: 300;
    font-size: calc(8vw + 1rem);
  }
`;

export const StyledSkill4 = styled(motion.div)`
  /* cursor: url("https://i.imgur.com/uqkkqaQ.png"), auto;*/
  min-height: 10vh;
  width: 100%;
  h1 {
    font-weight: 300;
    font-size: calc(8vw + 1rem);
  }
`;

export const StyledSkill5 = styled(motion.div)`
  /*cursor: url("https://i.imgur.com/ImkgrQ3.png"), auto;*/
  min-height: 10vh;
`;

export default SkillsPage;
