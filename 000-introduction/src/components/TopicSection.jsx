import ImageCarousel from "./ImageCarousel";
function TopicSection({ topic }) {
  return (
    <section id={topic.id} className="topic-section">
      <h2>
        {topic.sectionNumber}. {topic.title}{" "}
        {topic.link && (
          <a href={topic.link} className="learn-more">
            Learn More
          </a>
        )}
      </h2>

      {topic.projectName && (
        <p className="project-badge">
          Project: <strong>{topic.projectName}</strong>
        </p>
      )}

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

      {topic.images && topic.images.length > 0 && (
        <ImageCarousel images={topic.images} title="Images" />
      )}
    </section>
  );
}

export default TopicSection;
