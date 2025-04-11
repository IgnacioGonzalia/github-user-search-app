import { GitHubUser } from "../utils/githubAPI";
import SocialRow from "./SocialRow";
import UserCardLoader from "./UserCardLoader";
import LocationIcon from "../assets/icon-location.svg";
import LinkIcon from "../assets/icon-website.svg";
import TwitterIcon from "../assets/icon-twitter.svg";
import CompanyIcon from "../assets/icon-company.svg";
import LocationIconWhite from "../assets/icon-location-white.svg";
import LinkIconWhite from "../assets/icon-website-white.svg";
import TwitterIconWhite from "../assets/icon-twitter-white.svg";
import CompanyIconWhite from "../assets/icon-company-white.svg";

interface UserCardProps {
  user: GitHubUser | null;
  loading: boolean;
}

const UserCard = ({ user, loading }: UserCardProps) => {
  const cardContainer =
    "mx-auto my-4 w-[350px] bg-[var(--card-bg)] rounded-2xl shadow-xl pt-8 px-6 pb-[48px] md:w-[573px] md:p-10 lg:mt-6 lg:w-[730px] lg:p-12 lg:pt-11 lg:pl-[202px] lg:relative";
  const infoSection = "flex flex-row items-center gap-[19px] md:gap-10";
  const avatarStyles =
    "w-[70px] h-[70px] rounded-full md:w-28 md:h-28 lg:w-[117px] lg:h-[117px] lg:absolute lg:top-12 lg:left-12";
  const lgArrangement = "lg:flex lg:flex-row lg:justify-between lg:w-[480px]";
  const nameStyles =
    "space-mono bold text-base text-[var(--darkblue)] md:text-[26px]";
  const userStyles =
    "space-mono text-[13px] text-[var(--lightblue)] md:text-base md:mt-0.5";
  const dateJoinedStyles =
    "mt-[6px] space-mono text-[13px] text-[var(--lightgray)] md:text-[15px] md:mt-1";
  const bioStyles =
    "mt-8 space-mono text-[13px] text-[var(--text)] md:mt-6 md:text-[15px] lg:mt-5";
  const dataCard =
    "mt-6 flex flex-row justify-center gap-10 py-[18px] px-[14px] bg-[var(--bg)] rounded-[10px] md:mt-8 md:py-4 md:pl-8 md:pr-24 md:justify-between";
  const dataContainer =
    "text-center flex flex-col gap-2 md:gap-[1px] md:text-start";
  const dataCategory =
    "space-mono text-[11px] text-[var(--text)] md:text-[13px]";
  const dataNumber =
    "space-mono bold text-base text-[var(--darkblue)] md:text-[22px]";
  const socialSection =
    "mt-6 flex flex-col gap-4 md:mt-7 md:flex-row md:gap-16 md:mt-9";
  const socialCol = "flex flex-col gap-4 md:gap-5";
  const socialRow = "flex flex-row gap-5";
  const socialText = "space-mono text-[13px] text-[var(--text)] md:text-[15px]";
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

  if (loading)
    return (
      <UserCardLoader
        cardContainer={cardContainer}
        infoSection={infoSection}
        avatarStyles={avatarStyles}
        lgArrangement={lgArrangement}
        dataCard={dataCard}
        socialSection={socialSection}
        socialCol={socialCol}
      />
    );

  if (user === null) return;

  return (
    <div className={cardContainer}>
      <div className={infoSection}>
        <img src={user.avatar_url} alt="User avatar" className={avatarStyles} />
        <div className={lgArrangement}>
          <div>
            <h2 className={nameStyles}>{user.name}</h2>
            <p className={userStyles}>@{user.login}</p>
          </div>
          <p className={dateJoinedStyles}>
            Joined {formatDate(user.created_at)}
          </p>
        </div>
      </div>

      <div>
        <p className={bioStyles}>{user.bio ?? "This profile has no bio"}</p>
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
        <div className={socialCol}>
          <SocialRow
            iconLight={LocationIcon}
            iconDark={LocationIconWhite}
            label={user.location}
            socialText={socialText}
            styles={socialRow}
            disabled={disabled}
            userblog={userblog}
          />
          <SocialRow
            iconLight={LinkIcon}
            iconDark={LinkIconWhite}
            label={user.blog}
            isLink
            socialText={socialText}
            styles={socialRow}
            disabled={disabled}
            userblog={userblog}
          />
        </div>
        <div className={socialCol}>
          <SocialRow
            iconLight={TwitterIcon}
            iconDark={TwitterIconWhite}
            label={user.twitter_username}
            socialText={socialText}
            styles={socialRow}
            disabled={disabled}
            userblog={userblog}
          />
          <SocialRow
            iconLight={CompanyIcon}
            iconDark={CompanyIconWhite}
            label={user.company}
            socialText={socialText}
            styles={socialRow}
            disabled={disabled}
            userblog={userblog}
          />
        </div>
      </div>
    </div>
  );
};

export default UserCard;
