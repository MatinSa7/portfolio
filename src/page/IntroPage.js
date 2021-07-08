import React, { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";

const IntroPage = () => {
  const { pathname } = useLocation();
  const [hoverStatus, setHoverStatus] = useState(0);
  return (
    <StyledIntroPageContainer>
      <StyledLogoArea>
        <h1>logo</h1>
      </StyledLogoArea>
      <StyledDescription>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Error saepe
          aliquid amet provident eius vel aut? Reprehenderit, excepturi
          assumenda. Delectus.
        </p>
        <StyledList>
          <StyledLineContainer
            onMouseEnter={() => setHoverStatus(1)}
            onMouseLeave={() => setHoverStatus(0)}
          >
            <a href="">balls</a>
            {hoverStatus === 1 && <StyledLine></StyledLine>}
          </StyledLineContainer>
          <StyledLineContainer
            onMouseEnter={() => setHoverStatus(2)}
            onMouseLeave={() => setHoverStatus(0)}
          >
            <a href="">tentacles</a>
            {hoverStatus === 2 && <StyledLine></StyledLine>}
          </StyledLineContainer>
          <StyledLineContainer
            onMouseEnter={() => setHoverStatus(3)}
            onMouseLeave={() => setHoverStatus(0)}
          >
            <a href="">tentacles</a>
            {hoverStatus === 3 && <StyledLine></StyledLine>}
          </StyledLineContainer>
        </StyledList>
      </StyledDescription>
    </StyledIntroPageContainer>
  );
};

const StyledIntroPageContainer = styled(motion.div)`
  width: 80%;
  margin: auto;
`;

const StyledList = styled(motion.ul)`
  display: flex;
  flex: 1 1 6rem;
  flex-direction: column;
  padding-left: 5rem;
  a {
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
    font-weight: 600;
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

export default IntroPage;
