import { useState } from "react";
import ImageCarousel from "./ImageCarousel";
function TopicSection({ topic }) {
  const [activeTab, setActiveTab] = useState("overview");
  return (
    <>
      <section id={topic.id} className="topic-section">
        <h2>
          {topic.sectionNumber}. {topic.title}{" "}
          {topic.link && (
            <a href={topic.link} className="learn-more">
              Learn More
            </a>
          )}
        </h2>

        {/* {topic.projectName && (
          <p className="project-badge">
            Project: <strong>{topic.projectName}</strong>
          </p>
        )} */}

        <div className="tab-container">
          <div className="tab-buttons">
            <button
              className={`tab-button ${activeTab === "overview" ? "active" : ""}`}
              onClick={() => setActiveTab("overview")}
            >
              Overview
            </button>
            {topic.projectKeyPoints && topic.projectKeyPoints.length > 0 && (
              <button
                className={`tab-button ${
                  activeTab === "projectKeyPoints" ? "active" : ""
                }`}
                onClick={() => setActiveTab("projectKeyPoints")}
              >
                Project Key Points
              </button>
            )}
            {topic.images && topic.images.length > 0 && (
              <button
                className={`tab-button ${activeTab === "images" ? "active" : ""}`}
                onClick={() => setActiveTab("images")}
              >
                Images
              </button>
            )}
            {topic.codeimages && topic.codeimages.length > 0 && (
              <button
                className={`tab-button ${
                  activeTab === "codeimages" ? "active" : ""
                }`}
                onClick={() => setActiveTab("codeimages")}
              >
                Code Snippets
              </button>
            )}
          </div>
          <div className="tab-content">
            <section
              className={`tab-section ${activeTab === "overview" ? "active" : ""}`}
            >
              <h3>Section Overview</h3>
              <p>{topic.overview}</p>
              <h3>Section Overview</h3>
              <p>{topic.overview}</p>

              {topic.projectDescription && (
                <>
                  <h3>Project Description</h3>
                  <p>{topic.projectDescription}</p>
                </>
              )}

              <h3>Key Concepts</h3>
              <ul>
                {topic.concepts.map((concept, i) => (
                  <li key={i}>{concept}</li>
                ))}
              </ul>
            </section>

            {topic.projectKeyPoints && topic.projectKeyPoints.length > 0 && (
              <section
                className={`tab-section ${
                  activeTab === "projectKeyPoints" ? "active" : ""
                }`}
              >
                <h3>Project Key Points</h3>
                {topic.projectName && (
                  <p className="project-badge">
                    Project: <strong>{topic.projectName}</strong>
                  </p>
                )}

                <ul>
                  {topic.projectKeyPoints.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </section>
            )}

            {topic.images && topic.images.length > 0 && (
              <section
                className={`tab-section ${
                  activeTab === "images" ? "active" : ""
                }`}
              >
                <ImageCarousel images={topic.images} title="Images" />
              </section>
            )}

            {topic.codeimages && topic.codeimages.length > 0 && (
              <section
                className={`tab-section ${
                  activeTab === "codeimages" ? "active" : ""
                }`}
              >
                <ImageCarousel
                  images={topic.codeimages}
                  title="Code Snippets"
                />
              </section>
            )}
          </div>
        </div>
        {/* <h3>Section Overview</h3>
        <p>{topic.overview}</p>

        {topic.projectDescription && (
          <>
            <h3>Project Description</h3>
            <p>{topic.projectDescription}</p>
          </>
        )}

        <h3>Key Concepts</h3>
        <ul>
          {topic.concepts.map((concept, i) => (
            <li key={i}>{concept}</li>
          ))}
        </ul>

        {topic.projectKeyPoints && topic.projectKeyPoints.length > 0 && (
          <>
            <h3>Project Key Points</h3>
            <ul>
              {topic.projectKeyPoints.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </>
        )}

        {topic.images && topic.images.length > 0 && (
          <ImageCarousel images={topic.images} title="Images" />
        )}

        {topic.codeimages && topic.codeimages.length > 0 && (
          <ImageCarousel images={topic.codeimages} title="Code Snippets" />
        )} */}
      </section>
    </>
  );
}

export default TopicSection;
