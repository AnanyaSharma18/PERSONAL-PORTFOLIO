import { Col, Container, Row, Nav, Tab } from "react-bootstrap";
import { ProjectCard } from "./projectCard";
import colorSharp2 from "../assets/img/color-sharp2.png";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import projImg4 from "../assets/img/project-img4.png";
import projImg5 from "../assets/img/project-img5.png";
import projImg6 from "../assets/img/project-img6.png";
import projImg7 from "../assets/img/project-img7.png";
import projImg8 from "../assets/img/project-img8.png";
import projImg9 from "../assets/img/project-img9.png";
import projImg10 from "../assets/img/project-img10.png";
import 'animate.css';
import TrackVisibility from "react-on-screen";

export const Projects = () => {
    const projectsTabOne = [
        {
            title: "DYSCRIBB",
            description: "Dyslexia Detection software for identification of dyslexia in primary school students",
            imgUrl: projImg1,
            githubUrl: "https://github.com/AnanyaSharma18/DYSCRIBB",
        },
        {
            title: "PARKINSON PREDICTION SOFTWARE",
            description: "Prediction of parkinson using machine learning",
            imgUrl: projImg2,
            githubUrl: "https://github.com/AnanyaSharma18/Parkinson-Prediction-Using-ML",
        },
        {
            title: "UDYAMI CODE",
            description: "PORATBLE INCUBATION CENTER:An entreprenurship website that provides resources, mentors and captial to women and underpriveleged people",
            imgUrl: projImg3,
            githubUrl: "https://github.com/AnanyaSharma18/UDYAMI-CODE",
        },
        {
            title: "TWO-PASS MACROPROCESSOR",
            description: "A two pass macroprocessor in C++ inspired by the theoretical concepts studied in my coursework System programming.",
            imgUrl: projImg4,
            githubUrl: "https://github.com/AnanyaSharma18/Two-Pass-Macro-processor",
        },
        {
            title: "PDF-TO-AUDIO",
            description: "An application that helps convert pdfs' to audio to help grasp information on the go. Anywhere Anytime",
            imgUrl: projImg5,
            githubUrl: "https://github.com/AnanyaSharma18/PDF-to-Audio",
        },
        {
            title: "FACE DETECTION SOFTWARE",
            description: "A basic python application that helps in face detection.",
            imgUrl: projImg6,
            githubUrl: "https://github.com/AnanyaSharma18/face-detection-and-selfie-application",
        },
    ];
    const projectsTabTwo = [
        {
            title: "DISTANT VOTING SYSTEM",
            description: "A web application that helps in securely voting remotely to increase demographic participation. Currently available for out of state working professionals and the elderly",
            imgUrl: projImg7,
        },
        {
            title: "F1 REAL-TIME PIT STOP STRATEGY SOFTWARE",
            description: "Develop a decision-making system that uses real-time data to recommend the optimal timing for pit stops, maximizing race performance and minimizing time lost.",
            imgUrl: projImg8,
        },
    ];

    const projectsTabThree = [
        {
            title: "DISTANT VOTING SYSTEM DATASET",
            description: "A dummy dataset to be created that will hold all the details about the voters for prototyping and creation of the platform at a lower level initially",
            imgUrl: projImg9,
        },
        {
            title: "DYSCRIBB DATASET",
            description: "Dyslexia Detection dataset to be created comprising of all the different reading and writing patterns to increase",
            imgUrl: projImg10,
        },
    ];

    return (
        <section className="project" id="projects">
            <Container>
                <Row>
                    <Col>
                        <TrackVisibility>
                            {({ isVisible }) =>
                                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                                    <h2>Projects</h2>
                                    <p>Venture into my project space station, where each mission is a leap into cutting-edge technology and inventive solutions. Explore how I’ve charted new territories and reached for the stars with my work!</p>
                                </div>
                            }
                        </TrackVisibility>
                        <Tab.Container id="projects-tab" defaultActiveKey="first">
                            <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                                <Nav.Item>
                                    <Nav.Link eventKey="first">WORKING PROJECTS</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="second">UPCOMING PROJECTS</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="third">DATASETS DEVELOPNMENT</Nav.Link>
                                </Nav.Item>
                            </Nav>
                            <Tab.Content>
                                <Tab.Pane eventKey="first">
                                    <Row>
                                        {
                                            projectsTabOne.map((project, index) => {
                                                return (
                                                    <ProjectCard key={index} {...project} />
                                                )
                                            })
                                        }
                                    </Row>
                                </Tab.Pane>
                                <Tab.Pane eventKey="second">
                                    <Row>
                                        {
                                            projectsTabTwo.map((project, index) => {
                                                return (
                                                    <ProjectCard key={index} {...project} />
                                                )
                                            })
                                        }
                                    </Row>
                                </Tab.Pane>
                                <Tab.Pane eventKey="third">
                                    <Row>
                                        {
                                            projectsTabThree.map((project, index) => {
                                                return (
                                                    <ProjectCard key={index} {...project} />
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
            <img className="background-image-right" src={colorSharp2} />
        </section>
    );
}