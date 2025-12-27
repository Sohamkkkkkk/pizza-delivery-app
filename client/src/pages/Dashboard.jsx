import "./dashboard.css";

const pizzas = [
  { id: 1, name: "Margherita", price: 199 },
  { id: 2, name: "Pepperoni", price: 249 },
  { id: 3, name: "Farmhouse", price: 279 },
  { id: 4, name: "Cheese Burst", price: 299 },
];

export default function Dashboard() {
  return (
    <div className="dash-container">
      <h1>🍕 Choose Your Pizza</h1>

      <div className="pizza-grid">
        {pizzas.map((p) => (
          <div key={p.id} className="pizza-card">
            <h3>{p.name}</h3>
            <p>₹{p.price}</p>
            <button>Customize</button>
          </div>
        ))}
      </div>
    </div>
  );
}
