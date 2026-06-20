function Header({ title, author, overview }) {
  return (
    <header>
      <h1>{title}</h1>
      <h2>Course Overview</h2>
      <p>{overview}</p>
      <p>
        <strong>Author:</strong> {author}
      </p>
      <p>
        <strong>Instructor:</strong> Jonas Schmedtmann
      </p>
      <p>
        <strong>Build Tool:</strong> Vite (later sections), Create React App
        (earlier sections)
      </p>
    </header>
  );
}

export default Header;
