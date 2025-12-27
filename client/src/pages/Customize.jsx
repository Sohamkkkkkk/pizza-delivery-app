export default function Customize() {
  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2>🍕 Customize Pizza</h2>

        <select><option>Thin Crust</option></select>
        <select><option>Tomato Sauce</option></select>
        <select><option>Mozzarella</option></select>
        <select><option>Olives</option></select>

        <button>Confirm Order</button>
      </div>
    </div>
  );
}
