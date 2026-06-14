import React from "react";
import styled from "styled-components";

const Card = styled.div`
  width: 100%;
  max-width: ${({ $layout }) => ($layout === "wide" ? "520px" : "360px")};
  min-height: 260px;
  background: rgba(17, 25, 40, 0.83);
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 18px;
  padding: 22px;
  box-shadow: rgba(23, 92, 230, 0.15) 0px 4px 24px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 14px;
  transition: all 0.4s ease;
  backdrop-filter: blur(12px);
  overflow: hidden;

  &:hover {
    transform: translateY(-10px) scale(1.03);
    box-shadow: rgba(168, 85, 247, 0.45) 0px 12px 40px;
    border-color: rgba(168, 85, 247, 0.6);
  }
`;

const ImageFrame = styled.div`
  width: calc(100% + 44px);
  margin: -22px -22px 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.12);
  background: rgba(0, 0, 0, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  flex-shrink: 0;

  ${({ $layout }) =>
    $layout === "vertical"
      ? `
    height: 220px;
    padding: 14px 18px;
  `
      : $layout === "wide"
      ? `
    height: 200px;
    padding: 12px 16px;
  `
      : `
    height: 180px;
    padding: 12px 16px;
  `}
`;

const ProjectImage = styled.img`
  width: 100%;
  height: 100%;
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
  object-position: center;
  display: block;
  flex-shrink: 0;
`;

const Title = styled.h3`
  font-size: 18px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary};
`;

const Date = styled.div`
  font-size: 12px;
  color: ${({ theme }) => theme.text_secondary};
`;

const Description = styled.p`
  font-size: 14px;
  color: ${({ theme }) => theme.text_secondary};
  line-height: 1.6;
`;

const Tech = styled.div`
  font-size: 13px;
  color: #a855f7;
  font-weight: 500;
`;

const LinkRow = styled.div`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  margin-top: 4px;
`;

const Link = styled.a`
  color: #a855f7;
  font-weight: 600;
  text-decoration: none;
  padding: 8px 14px;
  border: 1px solid rgba(168, 85, 247, 0.4);
  border-radius: 10px;
  font-size: 13px;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(168, 85, 247, 0.15);
    text-decoration: none;
  }
`;

const PrimaryLink = styled(Link)`
  background: rgba(168, 85, 247, 0.12);
`;

const isValidLink = (url) =>
  url && url.startsWith("http") && !url.includes("[PASTE");

const ProjectCard = ({ project }) => {
  const tags = project.tags || project.tech || [];
  const layout = project.imageLayout || "standard";

  return (
    <Card $layout={layout}>
      {project.image && (
        <ImageFrame $layout={layout}>
          <ProjectImage
            src={project.image}
            alt={project.title}
            loading="lazy"
          />
        </ImageFrame>
      )}
      <div>
        <Title>{project.title}</Title>
        <Date>{project.date}</Date>
        <Description>{project.description}</Description>
      </div>

      {tags.length > 0 && <Tech>{tags.join(" • ")}</Tech>}

      <LinkRow>
        {isValidLink(project.downloadUrl) && (
          <PrimaryLink
            href={project.downloadUrl}
            target="_blank"
            rel="noopener noreferrer"
            download
          >
            {project.downloadLabel || "Download App"} →
          </PrimaryLink>
        )}
        {isValidLink(project.webapp) && (
          <PrimaryLink href={project.webapp} target="_blank" rel="noopener noreferrer">
            {project.webappLabel || "Live Demo"} →
          </PrimaryLink>
        )}
        {isValidLink(project.github) && (
          <Link href={project.github} target="_blank" rel="noopener noreferrer">
            GitHub →
          </Link>
        )}
      </LinkRow>
    </Card>
  );
};

export default ProjectCard;
