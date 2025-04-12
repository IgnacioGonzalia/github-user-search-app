import { GitHubUser } from "../utils/githubAPI";

interface UserRecommendationsProps {
  data: GitHubUser[];
  onSelect: (username: string) => void;
  selectedIndex: number;
}

const UserRecommendations = ({
  data,
  onSelect,
  selectedIndex,
}: UserRecommendationsProps) => {
  const recommendationsModal =
    "absolute z-50 top-16 left-0 flex flex-col gap-2 bg-[var(--bg)] p-4 rounded-xl shadow-xl w-[350px] md:w-[573px] md:top-20 lg:w-[730px]";
  const userRow =
    "flex flex-row gap-4 items-center p-2 rounded-xl cursor-pointer hover:bg-[var(--card-bg)]";
  const userImg = "w-4 h-4 rounded-full md:w-6 md:h-6 lg:w-10 lg:h-10";
  const userName = "space-mono text-[11px] md:text-[13px] lg:text-[18px]";

  return (
    <div className={recommendationsModal}>
      {data.map((user, i) => (
        <button
          key={user.id}
          className={`${userRow} ${
            selectedIndex === i ? "bg-[var(--card-bg)]" : ""
          }`}
          onClick={() => onSelect(user.login)}
        >
          <img src={user.avatar_url} alt="Avatar" className={userImg} />
          <p className={userName}>{user.login}</p>
        </button>
      ))}
    </div>
  );
};

export default UserRecommendations;
