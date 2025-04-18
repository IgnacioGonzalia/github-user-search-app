import { useEffect, useState } from "react";
import { ThemeProvider } from "./utils/ThemeContext";
import { GitHubUser, fetchUser } from "./utils/githubAPI";
import { useTranslation } from "react-i18next";
import NavBar from "./components/NavBar";
import UserSearch from "./components/UserSearch";
import UserCard from "./components/UserCard";
import "./App.css";

function App() {
  const { t } = useTranslation();
  const [userData, setUserData] = useState<GitHubUser | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [search, setSearch] = useState("");

  useEffect(() => {
    handleSearch("octocat");
  }, []);

  const handleSearch = async (username: string) => {
    setLoading(true);
    setError("");
    try {
      const data = await fetchUser(username);
      setUserData(data);
      setSearch("");
    } catch (error) {
      setError(t("no_results"));
      setUserData(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <ThemeProvider>
      <NavBar />
      <UserSearch
        search={search}
        setSearch={setSearch}
        onSearch={handleSearch}
        error={error}
      />
      <UserCard user={userData} loading={loading} />
    </ThemeProvider>
  );
}

export default App;
