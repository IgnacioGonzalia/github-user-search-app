import { ThemeProvider } from "./utils/ThemeContext";
import NavBar from "./components/NavBar";
import "./App.css";
import UserSearch from "./components/UserSearch";

function App() {
  return (
    <ThemeProvider>
      <NavBar />
      <UserSearch />
    </ThemeProvider>
  );
}

export default App;
