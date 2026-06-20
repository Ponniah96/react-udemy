function TableOfContents({ topics, projects }) {
  return (
    <nav>
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

      <h2>Projects</h2>
      <ul>
        {projects.map((project) => (
          <li key={project.id}>
            <a href={`#${project.id}`}>{project.projectName}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default TableOfContents;
