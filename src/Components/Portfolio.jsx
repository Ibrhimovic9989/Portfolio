/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/design-desk.jpeg";

const imageAltText = "desktop with books and laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "A basic AI powered Chatbot which drafts emails 🎉",
    description:
      "An Open AI API Key powered chatbot which can draft cold emails based on the information of LinkedIn Profile.",
    url: "https://colab.research.google.com/drive/18zxBIA6DVkk_vQzNB0m-GXC2A9_qni4y?usp=sharing",
  },
  {
    title: "A Blog on Cloud Computing with respect to Gen AI-A Fresh Perspective",
    description:
      "Published a blog on Cloud Computing with respect to Gen AI, which will provide a new/fresh perspective.",
    url: "https://ibrahim9989.blogspot.com/2023/07/introduction-to-cloud-computing.html",
  },
  {
    title: "A Blog on Microservices Architecture",
    description:
      "Published a blog on the Complex Microservice Architecture Complex  in such a way a layman can also understand.",
    url: "https://ibrahim9989.blogspot.com/2023/07/introduction-to-microservice.html",
  },
  {
    title: "Simple Duplicacy Detection System (CLI)",
    description:
      "Repo of a Simple Duplicacy Detection System using Python Pandas-CLI.",
    url: "https://github.com/Ibrhimovic9989/Duplicacy-detection-python",
  },
  
  {
    title: "Simple Order Processing System (CLI)",
    description:
      "Repo of a Simple Order Processing System using C-CLI.",
    url: "https://github.com/Ibrhimovic9989/order-processing",
  },
  
  {
    title: "MY RESUME",
    description:
      "Link to MY Resume",
    url: "https://docs.google.com/document/d/19_Pgv2AzpX5dVZwm5l-WfvV2paoRnBgaeuwrF_Wkr0s/edit?usp=sharing",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
