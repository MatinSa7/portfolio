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
  const [hoverStatus, setHoverStatus] = useState(1);

  return (
    <StyledIntroPageContainer
      initial="hidden"
      animate="show"
      variants={pageAnimation}
    >
      <StyledLogoArea>
        <h1>MS</h1>
        <motion.a
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          target="_blank"
          href="https://github.com/matinsa7"
        >
          Github
        </motion.a>{" "}
        <br />
        <motion.a
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          target="_blank"
          href="https://www.linkedin.com/in/matin-sarahi-882a1218a/"
        >
          Linkedin
        </motion.a>
        <motion.a
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          target="_blank"
          href="https://drive.google.com/file/d/1qWTO6Uvrfc9DeeoT7X7WjSwWvwo6aJ_o/view?usp=sharing"
        >
          Resume
        </motion.a>
      </StyledLogoArea>
      <StyledIconContainer></StyledIconContainer>
      <StyledDescription>
        <p>Matin Sarahi</p>
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
              <small
                onClick={() => window.scrollBy(0, 0.6 * window.innerHeight)}
              >
                Skills
              </small>
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
              <small
                onClick={() => window.scrollBy(0, 1.6 * window.innerHeight)}
              >
                Projects
              </small>
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

const StyledIconContainer = styled(motion.div)`
  display: flex;
`;

const StyledHide = styled.div`
  overflow: hidden;
`;

const StyledIntroPageContainer = styled(motion.div)`
  width: 80%;
  margin: auto;
  cursor: url("https://i.imgur.com/eANvpGO.png"), auto;
`;

const StyledList = styled(motion.ul)`
  display: flex;
  flex: 1 1 6rem;
  flex-direction: column;
  padding-left: 5rem;
  a,
  small {
    padding-left: 0.2rem;
    font-weight: 500;
    font-size: calc(0.8vw + 1rem);
    padding-bottom: 0.5rem;
    text-decoration: none;
    color: black;
  }
`;

const StyledDescription = styled(motion.div)`
  @media (max-width: 360px) {
    padding-left: 3rem;
  }
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
  a {
    text-decoration: none;
    color: black;
    margin-top: 3vh;
    margin-left: 3vw;
    font-size: calc(0.5vw + 0.5rem);
  }
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
  small {
    cursor: pointer;
  }
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
