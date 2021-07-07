import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const IntroPage = () => {
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
          <a href="">balls</a>
          <a href="">tentacles</a>
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
  flex: 1 1 5rem;
  flex-direction: column;
  padding-left: 5rem;
`;

const StyledDescription = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 40vh;

  p {
    flex: 5 1 20rem;
    font-size: calc(1vw + 1rem);
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

export default IntroPage;
