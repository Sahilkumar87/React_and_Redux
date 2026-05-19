import Tailwind from "./component/Tailwind";
import Card from "./component/Card";
function App(){

  // let myObj = {
  //   name: "Sneha Goyal",
  //   age: 20,
  //   add: "Bharatpur"
  // };

  // let name = "Sahil";
  return (<>

  <Tailwind></Tailwind>
  <Card userName="Sneha Goyal" img="https://images.pexels.com/photos/37259470/pexels-photo-37259470.jpeg" btnText="Click On"></Card>
  <Card userName="Sahil Kumar" img="https://images.pexels.com/photos/33582433/pexels-photo-33582433.jpeg" btnText="visit On"></Card>
  </>)
}

export default App;