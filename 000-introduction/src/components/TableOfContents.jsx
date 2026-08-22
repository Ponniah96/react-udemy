import { useState } from "react";
function TableOfContents({ topics, projects, videoInformation, extensions }) {
  const [activeTab, setActiveTab] = useState("topics");
  return (
    <>
      <nav>
        <div className="tab-container">
          <div className="tab-buttons">
            <button
              className={`tab-button ${activeTab === "topics" ? "active" : ""}`}
              onClick={() => setActiveTab("topics")}
            >
              Topics Discussed
            </button>
            <button
              className={`tab-button ${activeTab === "projects" ? "active" : ""}`}
              onClick={() => setActiveTab("projects")}
            >
              Projects
            </button>
            <button
              className={`tab-button ${activeTab === "videos" ? "active" : ""}`}
              onClick={() => setActiveTab("videos")}
            >
              Videos
            </button>
            <button
              className={`tab-button ${activeTab === "extensions" ? "active" : ""}`}
              onClick={() => setActiveTab("extensions")}
            >
              Extensions
            </button>
          </div>
          <div className="tab-content">
            <section
              className={`tab-section ${activeTab === "topics" ? "active" : ""}`}
            >
              <h2>Topics Discussed</h2>
              <ul>
                {topics.map((topic) => (
                  <li key={topic.id}>
                    <a href={`#${topic.id}`}>
                      {topic.sectionNumber}. {topic.title}
                    </a>
                  </li>
                ))}
              </ul>
            </section>
            <section
              className={`tab-section ${activeTab === "projects" ? "active" : ""}`}
            >
              <h2>Projects</h2>
              <ul>
                {projects.map((project) => (
                  <li key={project.id}>
                    <a href={`#${project.id}`}>{project.projectName}</a>
                  </li>
                ))}
              </ul>
            </section>
            <section
              className={`tab-section ${activeTab === "videos" ? "active" : ""}`}
            >
              <h2>Videos</h2>
              <ul>
                {videoInformation.map((video) => (
                  <li key={video.id}>
                    <a>
                      {video.Sno}. {video.description}
                    </a>
                  </li>
                ))}
              </ul>
            </section>
            <section
              className={`tab-section ${activeTab === "extensions" ? "active" : ""}`}
            >
              <h2>Extensions</h2>
              <ul>
                {extensions.map((extension) => (
                  <li key={extension.id}>
                    <a
                      href={extension.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {extension.name}
                    </a>
                  </li>
                ))}
              </ul>
            </section>
          </div>
        </div>
      </nav>
    </>
  );
}

export default TableOfContents;
