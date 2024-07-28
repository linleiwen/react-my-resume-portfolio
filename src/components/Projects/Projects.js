import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import myProjects from "../../Assets/Projects/Constant";


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
        {
          myProjects.map((myProject, index) => (
            <Col md={4} className="project-card">
            <ProjectCard
              key={index}
              imgPath={myProject.imgPath}
              title={myProject.title}
              description={myProject.description}
              ghLink={myProject.ghLink}
            />
            </Col>
            ))
            
        }
        </Row>
      </Container>
    </Container>
  );
}





export default Projects;
