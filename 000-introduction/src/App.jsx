import Header from "./components/Header";
import TableOfContents from "./components/TableOfContents";
import TopicSection from "./components/TopicSection";
import ImageCarousel from "./components/ImageCarousel";
import PdfEmbed from "./components/PdfEmbed";
import { courseInfo, topics, projects } from "./data/courseData";

const courseImages = [
  "/images/react-1.png",
  "/images/react-2.png",
  "/images/react-3.png",
  "/images/react-4.png",
  "/images/react-5.png",
];

function App() {
  return (
    <div className="app">
      <Header
        title={courseInfo.title}
        author={courseInfo.author}
        overview={courseInfo.overview}
      />

      <TableOfContents topics={topics} projects={projects} />

      <ImageCarousel
        images={courseImages}
        title="Important Video & Screenshots"
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
