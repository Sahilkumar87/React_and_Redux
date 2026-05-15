import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  // 
  let foodItems = [''];
  let emptyMessage = foodItems.length === 0 ? <h3>No UI</h3> : null;
  return (
    <>
      <h1>Healthy Foods </h1>
      {emptyMessage}
      <ul className="list-group">
        <li className="list-group-item">Person</li>

        {foodItems.map((item) => (
          <li key={item} className="list-group-item">
            {item}
          </li>
        ))}
      </ul>
    </>
  );  
}

export default App;
