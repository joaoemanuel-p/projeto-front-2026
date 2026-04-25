import "./Card.css";

export default function Card({ title, items }) {
  return (
    <article className="card">
      <h3>{title}</h3>

      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </article>
  );
}