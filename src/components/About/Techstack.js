import React from "react";
import { Col, Row, Tooltip, OverlayTrigger } from "react-bootstrap";
import { DiPython, DiJavascript1, DiReact, DiGit, DiJava } from "react-icons/di";
import { SiApacheairflow, SiSnowflake, SiDatabricks, SiHtml5, SiCss3, SiScala, SiAmazonaws, SiRedis, SiMongodb, SiPytorch, SiTensorflow, SiSpringboot, SiJenkins, SiApachekafka } from "react-icons/si";
import { FaAws } from "react-icons/fa";

function Techstack() {
  const techStacks = [
    { icon: <DiPython />, name: "Python" },
    { icon: <SiApachekafka />, name: "Spark" },
    { icon: <SiApacheairflow />, name: "Airflow" },
    { icon: <SiSnowflake />, name: "Snowflake" },
    { icon: <SiDatabricks />, name: "Databricks" },
    { icon: <DiReact />, name: "React" },
    { icon: <SiHtml5 />, name: "HTML" },
    { icon: <SiCss3 />, name: "CSS" },
    { icon: <DiJavascript1 />, name: "JavaScript" },
    { icon: <DiJava />, name: "Java" },
    { icon: <SiSpringboot />, name: "Spring Boot" },
    { icon: <SiScala />, name: "Scala" },
    { icon: <FaAws />, name: "AWS" },
    { icon: <SiRedis />, name: "Redis" },
    { icon: <SiMongodb />, name: "MongoDB" },
    { icon: <SiPytorch />, name: "PyTorch" },
    { icon: <SiTensorflow />, name: "TensorFlow" },
    { icon: <DiGit />, name: "Git" },
    { icon: <SiJenkins />, name: "Jenkins" },
  ];

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {techStacks.map((tech, index) => (
        <OverlayTrigger
          key={index}
          placement="top"
          overlay={<Tooltip id={`tooltip-${index}`}>{tech.name}</Tooltip>}
        >
          <Col xs={4} md={2} className="tech-icons">
            {tech.icon}
          </Col>
        </OverlayTrigger>
      ))}
    </Row>
  );
}

export default Techstack;
