import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import FoodItems from"./components/foodItems";
import Error from"./components/ErrorMessage";

function App() {
  let foodItems = ['Sahil', 'kumar', 'Sneha', 'goyal'];
  // // let foodItems = [''];
  return (
    <>
      <h1>Healthy Foods</h1>
      <Error items={foodItems}></Error>
      <FoodItems items={foodItems}></FoodItems>

    </>
  );
}

export default App;
