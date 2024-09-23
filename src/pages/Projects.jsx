import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "../components/Projects/ProjectCard";
import Particle from "../components/Particle";
import project from "../assets/projects/project.png";
import lift from "../assets/projects/lift.png";
import kickstart from "../assets/projects/kickstart.png";

const Projects = () => {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Recent Top <strong className="yellow">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={lift}
              isBlog={false}
              title="Movie App"
              description="My Movie App is a modern web application built with React that allows users to browse, filter, and manage their favorite movies and TV shows. Featuring a sleek, user-friendly interface, users can add new movies, search by title, and filter by rating, all while enjoying a smooth, responsive design"
              ghLink="https://github.com/manyaru/hook-2.git"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={project}
              isBlog={false}
              title="Travel Agency Website"
              description="I teamed up with a fellow developer to create a dynamic and visually engaging travel agency website. Our platform simplifies trip planning by offering seamless browsing of travel packages, destinations, and services. With a focus on user experience, we implemented a responsive design, interactive booking features, and tailored recommendations to enhance customer engagement and streamline the booking process."
              ghLink="https://github.com/AndrexCodes/GROUPTRAVELAGENCY.git"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={kickstart}
              isBlog={false}
              title="army Website"
              description="I developed a comprehensive army website, working alongside a team of backend developers to ensure seamless integration. The project involved building a secure and responsive platform for showcasing military services, personnel management, and operational resources. By collaborating on backend integration, we implemented robust authentication, data handling, and API systems to create an efficient and user-friendly experience."
              ghLink="https://github.com/JLennyM/Army-Recruitment.git"
            />
          </Col>

          
          
        </Row>
      </Container>
    </Container>
  )
}

export default Projects