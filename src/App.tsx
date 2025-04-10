import { ThemeProvider } from "./utils/ThemeContext";
import NavBar from "./components/NavBar";
import "./App.css";

function App() {
  return (
    <ThemeProvider>
      <NavBar />
    </ThemeProvider>
  );
}

export default App;
