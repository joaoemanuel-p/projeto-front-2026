import "./Card.css";

export default function Card({ title, items }) {
  return (
    <article className="card">
      <h3>{title}</h3>

      <ul>
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </article>
  );
}