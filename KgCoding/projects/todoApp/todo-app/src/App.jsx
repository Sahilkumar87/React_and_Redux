import AddTodo from "./componets/AddTodo";
import AppName from "./componets/AppName";
import Todoitem1 from "./componets/Todoitem1";
import Todoitem2 from "./componets/Todoitem2";
import "./App.css";

function App() {
  return (
    <center className="todo-container">
     <AppName/>
      <div className="container text-center">
        <AddTodo></AddTodo>
        <div class="item-container">
        <Todoitem1></Todoitem1>
        <Todoitem2></Todoitem2>
        </div>
      </div>
    </center>
  );
}

export default App;
