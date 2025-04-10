import { GitHubUser } from "../utils/githubAPI";
import LocationIcon from "../assets/icon-location.svg";
import LinkIcon from "../assets/icon-website.svg";
import TwitterIcon from "../assets/icon-twitter.svg";
import CompanyIcon from "../assets/icon-company.svg";

interface UserCardProps {
  user: GitHubUser | null;
  loading: boolean;
}

const UserCard = ({ user, loading }: UserCardProps) => {
  const cardContainer =
    "mx-auto my-4 w-[350px] bg-[var(--card-bg)] rounded-2xl shadow-xl pt-8 px-6 pb-[48px]";
  const infoSection = "flex flex-row gap-[19px]";
  const avatarStyles = "w-[70px] h-[70px] rounded-full";
  const nameStyles = "space-mono bold text-base text-[var(--darkblue)]";
  const userStyles = "space-mono text-[13px] text-[var(--lightblue)]";
  const dateJoinedStyles =
    "mt-[6px] space-mono text-[13px] text-[var(--lightgray)]";
  const bioStyles = "mt-8 space-mono text-[13px] text-[var(--text)]";
  const dataCard =
    "mt-6 flex flex-row justify-center gap-10 py-[18px] px-[14px] bg-[var(--bg)] rounded-[10px]";
  const dataContainer = "text-center flex flex-col gap-2";
  const dataCategory = "space-mono text-[11px] text-[var(--text)]";
  const dataNumber = "space-mono bold text-base text-[var(--darkblue)]";
  const socialSection = "mt-6 flex flex-col gap-4";
  const socialRow = "flex flex-row gap-5";
  const socialText = "space-mono text-[13px] text-[var(--text)]";
  const disabled = "opacity-50";
  const userblog = "cursor-pointer hover:underline";

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-GB", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });
  };

  return (
    <>
      {loading || user === null ? (
        <p>Loading...</p>
      ) : (
        <div className={cardContainer}>
          <div className={infoSection}>
            <img
              src={user.avatar_url}
              alt="User avatar"
              className={avatarStyles}
            />
            <div>
              <h2 className={nameStyles}>{user.name}</h2>
              <p className={userStyles}>@{user.login}</p>
              <p className={dateJoinedStyles}>
                Joined {formatDate(user.created_at)}
              </p>
            </div>
          </div>
          <div>
            <p className={bioStyles}>
              {user.bio ??
                "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros."}
            </p>
          </div>
          <div className={dataCard}>
            <div className={dataContainer}>
              <p className={dataCategory}>Repos</p>
              <p className={dataNumber}>{user.public_repos}</p>
            </div>
            <div className={dataContainer}>
              <p className={dataCategory}>Followers</p>
              <p className={dataNumber}>{user.followers}</p>
            </div>
            <div className={dataContainer}>
              <p className={dataCategory}>Following</p>
              <p className={dataNumber}>{user.following}</p>
            </div>
          </div>
          <div className={socialSection}>
            <div className={socialRow}>
              <img
                src={LocationIcon}
                alt="Location"
                className={` ${!user.location && disabled}`}
              />
              <p className={`${socialText} ${!user.location && disabled}`}>
                {user.location ?? "Not Available"}
              </p>
            </div>
            <div className={socialRow}>
              <img
                src={LinkIcon}
                alt="Website"
                className={` ${!user.blog && disabled}`}
              />
              <p className={`${socialText} ${user.blog ? userblog : disabled}`}>
                {user.blog !== "" ? <a href={user.blog}>{user.blog}</a> : "Not Available"}
              </p>
            </div>
            <div className={socialRow}>
              <img
                src={TwitterIcon}
                alt="Twitter"
                className={` ${!user.twitter_username && disabled}`}
              />
              <p
                className={`${socialText} ${
                  !user.twitter_username && disabled
                }`}
              >
                {user.twitter_username ?? "Not Available"}
              </p>
            </div>
            <div className={socialRow}>
              <img
                src={CompanyIcon}
                alt="Company"
                className={`${!user.company && disabled}`}
              />
              <p className={`${socialText} ${!user.company && disabled}`}>
                {user.company ?? "Not Available"}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default UserCard;
