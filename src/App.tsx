import "./App.css";
import NavBar from "./components/NavBar";
import { ThemeProvider } from "./utils/ThemeContext";

function App() {
  return (
    <ThemeProvider>
      <NavBar />
    </ThemeProvider>
  );
}

export default App;
