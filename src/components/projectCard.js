import { Col } from "react-bootstrap";
import { useState } from "react";

export const ProjectCard = ({ title, description, imgUrl, githubUrl }) => {
    const handleCardClick = () => {
        if (githubUrl) {
            window.open(githubUrl, '_blank');
        }
    };

    return (
        <Col sm={6} md={4} className="project-card" onClick={handleCardClick}>
            <div className="proj-imgbx">
                <img src={imgUrl} alt={title} />
                <div className="proj-txtx">
                    <h4>{title}</h4>
                    <span className="description">{description}</span>
                </div>
            </div>
        </Col>
    );
};
