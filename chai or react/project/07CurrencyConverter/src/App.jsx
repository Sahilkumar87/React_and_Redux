import Heading from "./components/Heading";
import {InputBox} from "./components";
import useCurrencyInfo from "./Hooks/useCurrencyinfo";
import useCurrencyInfo from "./Hooks/useCurrencyinfo";

function App() {
  const [amount, setAmount] = useState(0)
  const [from, setFrom] = useState("usd")
  const [to, setTo] = useState("inr")
  const [convertedAmount, setConvertedAmount] = useState(0)

  const currencyInfo = useCurrencyInfo(from)
  const options = Object.keys(currencyInfo)
  const swap = () => {
    setFrom(to)
    setTo(from)
    setConvertedAmount(amount)
    setAmount(convertedAmount)
  }
  return (
    <>
      <Heading></Heading>
    </>
  );
}

export default App;
