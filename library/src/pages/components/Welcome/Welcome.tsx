import './Welcome.css';

export default function Welcome() {
  return (
    <section className="welcome">
      <div className="welcome__shadow" />
      <div className="container">
        <h2 className="welcome__heading">
          Welcome
          <br /> to the Brooklyn <br /> Library
        </h2>
      </div>
    </section>
  );
}
