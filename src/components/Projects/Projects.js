import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import cryptohub from "../../Assets/Projects/cryptohub.png";
import emotion from "../../Assets/Projects/emotion.png";
import pizzabox from "../../Assets/Projects/pizzabox.png";
import taskify from "../../Assets/Projects/taskify.png";
import passgene from "../../Assets/Projects/passgene.png";
import trendytoes from "../../Assets/Projects/trendytoes.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={taskify}
              isBlog={false}
              title="Taskify"
              description="Task Manager App This is a simple Task Manager web application built using React and the Mantine UI library. It allows users to create, list, and delete tasks. The app supports two color schemes: light and dark mode."
              ghLink="https://github.com/ashuu2099/Taskify"
              demoLink="https://taskify-iota.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={trendytoes}
              isBlog={false}
              title="TrendyToes"
              description="TrendyToes! We are thrilled to have you here. This web application is built using ViteJS, a blazing-fast build tool for modern web development. Below, we have provided essential information to help you understand and navigate through our website effortlessly."
              ghLink="https://github.com/ashuu2099/TrendyToes"
              demoLink="https://trendy-toes.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pizzabox}
              isBlog={false}
              title="PizzaBox"
              description="Online code and markdown editor build with react.js. Online Editor which supports html, css, and js code with instant view of website. Online markdown editor for building README file which supports GFM, Custom Html tags with toolbar and instant preview.Both the editor supports auto save of work using Local Storage"
              ghLink="https://github.com/ashuu2099/PizzaBox"
              demoLink="https://pizza-box-beta.vercel.app/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={cryptohub}
              isBlog={false}
              title="CryptoHub"
              description="CryptoHub is a web application built using React that provides users with comprehensive information about the cryptocurrency market. It offers real-time data about the market, top 100 coins, and related news, all in one convenient platform."
              ghLink="https://github.com/ashuu2099/cryptohub"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={passgene}
              isBlog={false}
              title="Password Generator"
              description="Create robust passwords using the power of Vite and React. Personalize password criteria including length, uppercase, lowercase, numbers, and special characters. Quickly copy passwords to your clipboard for seamless use."
              ghLink="https://github.com/ashuu2099/GeneratePassword"
            />
          </Col>

         
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
