import { Providers } from "./context/provider";
import Routes from "./routes";

function App() {
  return (
    <Providers>
      <Routes />
    </Providers>
  );
}

export default App;
