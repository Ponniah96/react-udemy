import Header from "./components/Header";
import TableOfContents from "./components/TableOfContents";
import TopicSection from "./components/TopicSection";
import PdfEmbed from "./components/PdfEmbed";
import {
  courseInfo,
  topics,
  projects,
  videoInformation,
} from "./data/courseData";

function App() {
  return (
    <div className="app">
      <Header
        title={courseInfo.title}
        author={courseInfo.author}
        overview={courseInfo.overview}
      />

      <TableOfContents
        topics={topics}
        projects={projects}
        videoInformation={videoInformation}
      />

      {topics.map((topic) => (
        <TopicSection key={topic.id} topic={topic} />
      ))}

      <PdfEmbed
        src="/theory-slides-v1.1.pdf"
        title="PPT for the Entire Course"
      />
    </div>
  );
}

export default App;
