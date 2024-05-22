import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

const prologue = [
    {
        title: "Prologue",
        description: "Design & Development",
        imgUrl: projImg1,
      },
    ];
const repereschronos = [
    {
        title: "Repères chronologiques",
        description: "Design & Development",
        imgUrl: projImg2,
        },
    ];
const chapitre1 = [
    {
        title: "Ses ascendants de l’Est",
        description: "Design & Development",
        imgUrl: projImg1,
        },
    {
        title: "Ses quatre femmes ",
        description: "Design & Development",
        imgUrl: projImg2,
        },
    ];
const chapitre2 = [
{
title: "Business Startup",
description: "Design & Development",
imgUrl: projImg1,
},
];
const chapitre3 = [
{
title: "Business Startup",
description: "Design & Development",
imgUrl: projImg1,
},
];
const chapitre4 = [
{
    title: "Business Startup",
    description: "Design & Development",
    imgUrl: projImg1,
    },
];
const chapitre5 = [
    {
        title: "Business Startup",
        description: "Design & Development",
        imgUrl: projImg1,
        },
    ];
const epilogue = [
{
    title: "Business Startup",
    description: "Design & Development",
    imgUrl: projImg1,
    },
];
const remerciements = [
    {
        title: "Business Startup",
        description: "Design & Development",
        imgUrl: projImg1,
        },
    ];


export const Projects = () =>{
    return (
        <section className="project" id="projects">
            <Container>
                <Row>
                    <Col>
                            <h2>
                                Chapitre<br></br>
                            </h2>
                        <Tab.Container id="projects-tabs" defaultActiveKey="first">
                            <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                                <Nav.Item>
                                    <Nav.Link eventKey="first">Prologue</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="second">Repères chronologiques</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="third">I</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="fourth">II</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="fifth">III</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="sixth">IV</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="seventh">V</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="eighth">Epilogue</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="nineth">Remerciements</Nav.Link>
                                </Nav.Item>

                            </Nav>
                            <Tab.Content>
                                <Tab.Pane eventKey="first">
                                    <Row>
                                        {
                                            prologue.map((souschap, index)=>{
                                                return (
                                                    <ProjectCard
                                                        key={index}
                                                        {...souschap}
                                                    />
                                                )
                                            })
                                        }
                                    </Row>
                                </Tab.Pane>
                                <Tab.Pane eventKey="second">
                                <Row>
                                        {
                                            repereschronos.map((souschap, index)=>{
                                                return (
                                                    <ProjectCard
                                                        key={index}
                                                        {...souschap}
                                                    />
                                                )
                                            })
                                        }
                                    </Row>
                                </Tab.Pane>
                                <Tab.Pane eventKey="third">
                                <Row>
                                        {
                                            chapitre1.map((souschap, index)=>{
                                                return (
                                                    <ProjectCard
                                                        key={index}
                                                        {...souschap}
                                                    />
                                                )
                                            })
                                        }
                                    </Row>
                                </Tab.Pane>
                                <Tab.Pane eventKey="fourth">
                                <Row>
                                        {
                                            chapitre2.map((souschap, index)=>{
                                                return (
                                                    <ProjectCard
                                                        key={index}
                                                        {...souschap}
                                                    />
                                                )
                                            })
                                        }
                                    </Row>
                                </Tab.Pane>
                                <Tab.Pane eventKey="fifth">
                                <Row>
                                        {
                                            chapitre3.map((souschap, index)=>{
                                                return (
                                                    <ProjectCard
                                                        key={index}
                                                        {...souschap}
                                                    />
                                                )
                                            })
                                        }
                                    </Row>
                                </Tab.Pane>
                                <Tab.Pane eventKey="sixth">
                                <Row>
                                        {
                                            chapitre4.map((souschap, index)=>{
                                                return (
                                                    <ProjectCard
                                                        key={index}
                                                        {...souschap}
                                                    />
                                                )
                                            })
                                        }
                                    </Row>
                                </Tab.Pane>
                                <Tab.Pane eventKey="seventh">
                                <Row>
                                        {
                                            chapitre5.map((souschap, index)=>{
                                                return (
                                                    <ProjectCard
                                                        key={index}
                                                        {...souschap}
                                                    />
                                                )
                                            })
                                        }
                                    </Row>
                                </Tab.Pane>
                                <Tab.Pane eventKey="eighth">
                                <Row>
                                        {
                                            epilogue.map((souschap, index)=>{
                                                return (
                                                    <ProjectCard
                                                        key={index}
                                                        {...souschap}
                                                    />
                                                )
                                            })
                                        }
                                    </Row>
                                </Tab.Pane>
                                <Tab.Pane eventKey="nineth">
                                <Row>
                                        {
                                            remerciements.map((souschap, index)=>{
                                                return (
                                                    <ProjectCard
                                                        key={index}
                                                        {...souschap}
                                                    />
                                                )
                                            })
                                        }
                                    </Row>
                                </Tab.Pane>
                            </Tab.Content>
                        </Tab.Container>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-right" src={colorSharp2}></img>
        </section>
    )
}