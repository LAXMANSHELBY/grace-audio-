import React from "react";
import styled from "styled-components";
import { Bio } from "../../data/constants";
import Typewriter from "typewriter-effect";
import HeroBgAnimation from "../HeroBgAnimation";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import {
  headContainerAnimation,
  headContentAnimation,
  headTextAnimation,
} from "../../utils/motion";
import StarCanvas from "../canvas/Stars";

/* ================= STYLES ================= */

const HeroContainer = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  padding: 80px 30px;
  z-index: 1;

  @media (max-width: 960px) {
    padding: 66px 16px;
  }

  @media (max-width: 640px) {
    padding: 32px 16px;
  }

  clip-path: polygon(0 0, 100% 0, 100% 100%, 70% 95%, 0 100%);
`;

const HeroInnerContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1100px;

  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

const HeroLeftContainer = styled.div`
  width: 100%;
  order: 1;

  @media (max-width: 960px) {
    order: 2;
    margin-bottom: 30px;
    display: flex;
    gap: 6px;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
`;

const HeroRightContainer = styled.div`
  width: 100%;
  order: 2;
  display: flex;
  justify-content: flex-end;
  z-index: 10;

  @media (max-width: 960px) {
    order: 1;
    justify-content: center;
    margin-bottom: 60px;
  }
`;

const Title = styled.div`
  font-weight: 700;
  font-size: 50px;
  color: ${({ theme }) => theme.text_primary};
  line-height: 68px;

  @media (max-width: 960px) {
    font-size: 40px;
    line-height: 48px;
  }
`;

const TextLoop = styled.div`
  font-weight: 600;
  font-size: 32px;
  display: flex;
  gap: 12px;
  color: ${({ theme }) => theme.text_primary};
  line-height: 68px;

  @media (max-width: 960px) {
    font-size: 22px;
    line-height: 48px;
    justify-content: center;
  }
`;

const Span = styled.span`
  color: ${({ theme }) => theme.primary};
`;

const SubTitle = styled.div`
  font-size: 20px;
  line-height: 32px;
  margin-bottom: 42px;
  color: ${({ theme }) => theme.text_primary + 95};

  @media (max-width: 960px) {
    font-size: 16px;
  }
`;

const ResumeButton = styled.a`
  width: 95%;
  max-width: 300px;
  text-align: center;
  padding: 16px 0;
  border-radius: 50px;
  font-weight: 600;
  font-size: 20px;
  color: white;
  text-decoration: none;

  background: linear-gradient(225deg, #7f00ff, #e100ff);
  box-shadow: 0 10px 40px rgba(168, 85, 247, 0.5);

  &:hover {
    transform: scale(1.05);
    transition: all 0.3s ease-in-out;
  }

  @media (max-width: 640px) {
    font-size: 18px;
    padding: 12px 0;
  }
`;

/* 🔥 FIXED IMAGE STYLE (CLEAR & VISIBLE) */
const Img = styled.img`
  width: 320px;
  height: 320px;
  border-radius: 50%;
  object-fit: cover;

  background: #0f172a;
  border: 4px solid ${({ theme }) => theme.primary};
  box-shadow: 0 0 45px rgba(168, 85, 247, 0.7);

  position: relative;
  z-index: 20;

  @media (max-width: 640px) {
    width: 240px;
    height: 240px;
  }
`;

const HeroBg = styled.div`
  position: absolute;
  inset: 0;
  display: flex;
  justify-content: center;
  overflow: hidden;
  z-index: 0;
`;

/* ================= COMPONENT ================= */

const Hero = () => {
  return (
    <div id="About">
      <HeroContainer>
        <HeroBg>
          <StarCanvas />
          <HeroBgAnimation />
        </HeroBg>

        <motion.div {...headContainerAnimation}>
          <HeroInnerContainer>
            <HeroLeftContainer>
              <motion.div {...headTextAnimation}>
                <Title>
                  Hi, I am <br /> {Bio.name}
                </Title>

                <TextLoop>
                  I am a
                  <Span>
                    <Typewriter
                      options={{
                        strings: Bio.roles,
                        autoStart: true,
                        loop: true,
                      }}
                    />
                  </Span>
                </TextLoop>
              </motion.div>

              <motion.div {...headContentAnimation}>
                <SubTitle>{Bio.description}</SubTitle>
              </motion.div>

              <ResumeButton href={Bio.resume} target="_blank">
                Check Resume
              </ResumeButton>
            </HeroLeftContainer>

            <HeroRightContainer>
              <motion.div {...headContentAnimation}>
                <Tilt>
                  {/* ✅ PUBLIC IMAGE – NO IMPORT */}
                  <Img src="/HeroImageLaxman (2).jpg" alt="Laxman Sunkari" />
                </Tilt>
              </motion.div>
            </HeroRightContainer>
          </HeroInnerContainer>
        </motion.div>
      </HeroContainer>
    </div>
  );
};

export default Hero;
