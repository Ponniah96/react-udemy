function ImageCarousel({ images, title }) {
  return (
    <section className="screenshots-section">
      <h2>{title}</h2>
      <div className="carousel">
        {images.map((src, i) => (
          <img key={i} src={src} alt={`Course screenshot ${i + 1}`} />
        ))}
      </div>
    </section>
  );
}

export default ImageCarousel;
