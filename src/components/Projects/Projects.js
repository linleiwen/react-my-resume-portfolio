import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import myProjects from "../../Assets/Projects/MyProject";


function Projects() {

  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="navy-blue">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={myProjects[0].imgPath}
              title={myProjects[0].title}
              description={myProjects[0].description}
              ghLink={myProjects[0].ghLink}
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
