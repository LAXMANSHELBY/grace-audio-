import React from "react";
import { VerticalTimelineElement } from "react-vertical-timeline-component";
import styled from "styled-components";

const Top = styled.div`
  width: 100%;
  display: flex;
  gap: 12px;
`;

const Image = styled.img`
  height: 50px;
  border-radius: 10px;
  margin-top: 4px;
`;

const Body = styled.div`
  display: flex;
  flex-direction: column;
`;

const School = styled.div`
  font-size: 18px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary};
`;

const Degree = styled.div`
  font-size: 14px;
  color: ${({ theme }) => theme.text_secondary};
`;

const Date = styled.div`
  font-size: 12px;
  color: ${({ theme }) => theme.text_secondary};
  opacity: 0.7;
`;

const Description = styled.div`
  font-size: 15px;
  line-height: 1.6;
  color: ${({ theme }) => theme.text_primary};
  margin-top: 10px;
  word-wrap: break-word;
  overflow-wrap: break-word;
`;

const Grade = styled.div`
  font-size: 14px;
  color: ${({ theme }) => theme.text_secondary};
  margin-top: 8px;
`;

const EducationCard = ({ education }) => {
  return (
    <VerticalTimelineElement
      date={education?.date}
      contentStyle={{
        background: "rgba(10, 27, 61, 0.83)",
        border: "1px solid rgba(255, 255, 255, 0.125)",
        borderRadius: "12px",
        boxShadow: "rgba(23, 92, 230, 0.15) 0px 4px 24px",
        padding: "20px",

        /* 🔥 THIS FIXES YOUR BUG */
        maxWidth: "420px",
      }}
      contentArrowStyle={{
        borderRight: "7px solid rgba(255, 255, 255, 0.3)",
      }}
      icon={
  <div
    style={{
      width: "100%",
      height: "100%",
      borderRadius: "50%",
      background: "radial-gradient(circle, #f1f1f5, #10515ad7)",
      boxShadow: "0 0 15px rgba(168,85,247,0.8)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: "white",
      fontSize: "18px",
      fontWeight: "bold",
    }}
  >
    🎓
  </div>
}

    >
      <Top>
        <Image src={education?.img} />
        <Body>
          <School>{education?.school}</School>
          <Degree>{education?.degree}</Degree>
          <Date>{education?.date}</Date>
        </Body>
      </Top>

      <Grade>
        <b>Grade:</b> {education?.grade}
      </Grade>

      <Description>{education?.desc}</Description>
    </VerticalTimelineElement>
  );
};

export default EducationCard;
