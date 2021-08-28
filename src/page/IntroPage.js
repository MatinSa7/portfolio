import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";
import {
  lineAnimation,
  lineAnimation2,
  lineAnimation3,
  pageAnimation,
  descriptionAnimation,
} from "../animation";

const IntroPage = () => {
  const { pathname } = useLocation();
  const [hoverStatus, setHoverStatus] = useState(1);
  return (
    <StyledIntroPageContainer
      initial="hidden"
      animate="show"
      variants={pageAnimation}
    >
      <StyledLogoArea>
        <h1>Matin</h1>
      </StyledLogoArea>
      <StyledDescription>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Error saepe
          aliquid amet provident eius vel aut? Reprehenderit, excepturi
          assumenda. Delectus.
        </p>
        <StyledList>
          <StyledHide>
            <StyledLineContainer
              onMouseEnter={() => setHoverStatus(1)}
              onMouseLeave={() => setHoverStatus(hoverStatus)}
              variants={descriptionAnimation}
            >
              <a href="">Intro</a>
              {hoverStatus === 1 && (
                <StyledLine
                  initial="hidden"
                  animate="show"
                  variants={lineAnimation}
                ></StyledLine>
              )}
            </StyledLineContainer>
          </StyledHide>
          <StyledHide>
            <StyledLineContainer
              onMouseEnter={() => setHoverStatus(2)}
              onMouseLeave={() => setHoverStatus(hoverStatus)}
              variants={descriptionAnimation}
            >
              <a href="">Skills</a>
              {hoverStatus === 2 && (
                <StyledLine2
                  initial="hidden"
                  animate="show"
                  variants={lineAnimation2}
                ></StyledLine2>
              )}
            </StyledLineContainer>
          </StyledHide>
          <StyledHide>
            <StyledLineContainer
              onMouseEnter={() => setHoverStatus(3)}
              onMouseLeave={() => setHoverStatus(hoverStatus)}
              variants={descriptionAnimation}
            >
              <a href="">Projects</a>
              {hoverStatus === 3 && (
                <StyledLine3
                  initial="hidden"
                  animate="show"
                  variants={lineAnimation3}
                ></StyledLine3>
              )}
            </StyledLineContainer>
          </StyledHide>
        </StyledList>
      </StyledDescription>
    </StyledIntroPageContainer>
  );
};

const StyledHide = styled.div`
  overflow: hidden;
`;

const StyledIntroPageContainer = styled(motion.div)`
  width: 80%;
  margin: auto;
  overflow: hidden;
  cursor: url("https://i.imgur.com/eANvpGO.png"), auto;
`;

const StyledList = styled(motion.ul)`
  display: flex;
  flex: 1 1 6rem;
  flex-direction: column;
  padding-left: 5rem;
  a {
    padding-left: 0.2rem;
    font-weight: 500;
    font-size: calc(0.8vw + 1rem);
    padding-bottom: 0.5rem;
    text-decoration: none;
    color: black;
  }
`;

const StyledDescription = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 50vh;

  p {
    flex: 5 1 20rem;
    font-size: calc(2vw + 1rem);
    font-weight: 400;
  }
`;

const StyledLogoArea = styled(motion.div)`
  h1 {
    font-size: calc(3vw + 1rem);
  }
  display: flex;
  align-items: center;
  min-height: 20vh;
  margin: auto;
`;

const StyledLineContainer = styled(motion.div)`
  position: relative;
  margin: 0.5rem 0;
`;

const StyledLine = styled(motion.div)`
  position: absolute;
  background: #8f6aff;
  bottom: 0%;
  z-index: -1;
  height: 40%;
  width: 100%;
`;

const StyledLine2 = styled(motion.div)`
  position: absolute;
  background: #ffdf6b;
  bottom: 0%;
  z-index: -1;
  height: 40%;
  width: 100%;
`;

const StyledLine3 = styled(motion.div)`
  position: absolute;
  background: #32e0c4;
  bottom: 0%;
  z-index: -1;
  height: 40%;
  width: 100%;
`;

export default IntroPage;
