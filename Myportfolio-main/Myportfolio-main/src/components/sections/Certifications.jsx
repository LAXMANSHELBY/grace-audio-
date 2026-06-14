import React from "react";
import styled from "styled-components";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";


const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  align-items: center;
`;
const HoverCard = styled.div`
  transition: transform 0.35s ease, box-shadow 0.35s ease;
  transform-style: preserve-3d;
  will-change: transform;

  &:hover {
    transform: perspective(1000px) rotateX(6deg) rotateY(-6deg) scale(1.03)
      translateY(-6px);
    box-shadow: 0 20px 40px rgba(168, 85, 247, 0.25);
  }
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1100px;
  gap: 12px;
`;

const Title = styled.div`
  font-size: 52px;
  text-align: center;
  font-weight: 600;
  margin-top: 20px;
  color: ${({ theme }) => theme.text_primary};

  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 32px;
  }
`;

const Desc = styled.div`
  font-size: 18px;
  text-align: center;
  font-weight: 600;
  color: ${({ theme }) => theme.text_secondary};
  margin-bottom: 40px;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const Certifications = () => {
  const certifications = [
    {
      title: "AWS Cloud Architecture",
      date: "2024",
        file: "/AWS_Cloud_Architecture.pdf",
      icon: "/favicon.ico"
    },
    {
      title: "AWS Cloud Foundations",
      date: "2025",
      file: "/AWS_Cloud_Foundations.pdf",
      icon: "/favicon.ico"
    },
    {
         title: "Infosys DSA Part 1",
      date: "2025",
        file: "/Infosys_DSA_1.pdf",
      icon: "/favicon.ico"
    },
    {
      title: "Infosys DSA Part 2",
      date: "2025",
       file: "/Infosys_DSA_2.pdf",
      icon: "/favicon.ico"
    },
    {
      title: "Infosys Java Programing",
      date: "2025",
    file: "/Infosys_java_Programing.pdf",
      icon: "/favicon.ico"
    },
    {
      title: "Oracle Data Science Professional",
      date: "2025",
      file: "/Oracle_Data_Science_Professional.pdf",

      icon: "/favicon.ico"
    },
    {
      title: "Oracle DevOps Professional",
      date: "2025",
       file: "/Oracle_DevOps_Professional.pdf",
      icon: "/favicon.ico"
    }
  ];

  return (
    <Container id="certifications">
      <Wrapper>
        <Title>Certifications</Title>
        <Desc>Professional certifications and achievements</Desc>

        <VerticalTimeline>
          {certifications.map((cert, index) => (
            <VerticalTimelineElement
              key={index}
              date={cert.date}
 icon={
  <div
    style={{
      width: "100%",
      height: "100%",
      borderRadius: "50%",
      background: "radial-gradient(circle, #070d63, #10515ad7)",
      boxShadow: "0 0 20px rgba(168,85,247,0.9)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: "white",
      fontSize: "20px",
      fontWeight: "bold",
    }}
  >
    ★
  </div>
}



              contentStyle={{
                display: "flex",
                flexDirection: "column",
                gap: "12px",
                background: "#1d1836",
                color: "#fff",
                boxShadow: "rgba(23, 92, 230, 0.15) 0px 4px 24px",
                backgroundColor: "rgba(17, 25, 40, 0.83)",
                border: "1px solid rgba(255, 255, 255, 0.125)",
                borderRadius: "6px",
              }}
              contentArrowStyle={{
                borderRight: "7px solid rgba(255, 255, 255, 0.3)",
              }}
            >
              <HoverCard>
  <h3 style={{ color: "#fff", fontWeight: 600 }}>{cert.title}</h3>

  <a
    href={cert.file}
    target="_blank"
    rel="noopener noreferrer"
    style={{
      color: "#a855f7",
      fontWeight: "600",
      marginTop: "8px",
      textDecoration: "none",
      display: "inline-block",
    }}
  >
    View Certificate →
  </a>
</HoverCard>

            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </Wrapper>
    </Container>
  );
};

export default Certifications;
