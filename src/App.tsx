import { useEffect, useState } from "react";
import { ThemeProvider } from "./utils/ThemeContext";
import { GitHubUser, fetchUser } from "./utils/githubAPI";
import NavBar from "./components/NavBar";
import UserSearch from "./components/UserSearch";
import UserCard from "./components/UserCard";
import "./App.css";

function App() {
  const [userData, setUserData] = useState<GitHubUser | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    handleSearch("octocat");
  }, []);

  const handleSearch = async (username: string) => {
    setLoading(true);
    setError("");
    try {
      const data = await fetchUser(username);
      setUserData(data);
    } catch (error) {
      setError("No results");
      setUserData(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <ThemeProvider>
      <NavBar />
      <UserSearch onSearch={handleSearch} error={error} />
      <UserCard user={userData} loading={loading} />
    </ThemeProvider>
  );
}

export default App;
