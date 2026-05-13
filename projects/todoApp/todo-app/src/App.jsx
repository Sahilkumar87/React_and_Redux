import AddTodo from "./componets/AddTodo";
import AppName from "./componets/AppName";
import Todoitem1 from "./componets/Todoitem1";
import Todoitem2 from "./componets/Todoitem2";
import "./App.css";

function App() {
  return (
    <center class="todo-container">
     <AppName/>
      <div class="container text-center">
        <AddTodo></AddTodo>
        <Todoitem1></Todoitem1>
        <Todoitem2></Todoitem2>
      </div>
    </center>
  );
}

export default App;
