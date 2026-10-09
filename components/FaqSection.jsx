export default function FaqSection({ title, intro, items, sectionClassName = "section" }) {
  return (
    <section className={sectionClassName}>
      <div className="container">
        <header className="section-header">
          <h2>{title}</h2>
          {intro ? <p>{intro}</p> : null}
        </header>
        <div className="grid services-grid">
          {items.map((item) => (
            <article className="card service-card" key={item.question}>
              <h3>{item.question}</h3>
              <p>{item.answer}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
