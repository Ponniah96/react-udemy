function PdfEmbed({ src, title }) {
  return (
    <section className="pdf-section">
      <h2>{title}</h2>
      <iframe src={src} title={title} width="100%" height="800px"></iframe>
    </section>
  );
}

export default PdfEmbed;
