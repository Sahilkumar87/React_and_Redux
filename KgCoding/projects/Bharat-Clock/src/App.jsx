import "./App.css";
import "bootstrap/dist/css//bootstrap.min.css";
import "./components/ClockHeading";
import ClockHeading from "./components/ClockHeading";
import "./components/ClockSlogan";
import ClockSlogan from "./components/ClockSlogan";
import "./components/CurrentTime";
import CurrentTime from "./components/CurrentTime";
function App() {
  return (
    <div>
      <ClockHeading></ClockHeading>
      <ClockSlogan></ClockSlogan>
      <CurrentTime></CurrentTime>
    </div>
  );
}

export default App;
