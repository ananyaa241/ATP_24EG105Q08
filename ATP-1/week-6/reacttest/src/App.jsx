import Body from "./components/Body";
import { CounterProvider } from "./contexts/CounterContext";

function App() {
  return (
    <CounterProvider>
      <div className="min-h-screen">
        <Body />
      </div>
    </CounterProvider>
  );
}

export default App;