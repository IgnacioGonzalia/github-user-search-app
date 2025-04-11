import SearchIcon from "../assets/icon-search.svg";

interface UserSearchProps {
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
  onSearch: (username: string) => void;
  error: string;
}

const UserSearch = ({
  search,
  setSearch,
  onSearch,
  error,
}: UserSearchProps) => {
  const searchContainer =
    "mt-9 mx-auto flex w-[350px] pt-[6.5px] pb-[7.5px] pl-4 pr-2 items-center rounded-2xl transition-colors bg-[var(--card-bg)] text-[var(--text)] shadow-xl relative";
  const searchContainerLarger =
    "mt-[45.5px] md:w-[573px] md:py-[9.5px] md:pl-8 md:pr-2.5 lg:mt-9 lg:w-[730px]";
  const searchIconStyles = "w-5 h-5 md:w-6 md:h-6";
  const inputStyles =
    "ml-[9px] flex-1 bg-transparent outline-none text-[var(--text)] placeholder:text-[var(--text)] space-mono text-[13px] pr-2 cursor-pointer";
  const inputStylesLarger = "md:ml-6 md:text-[18px]";
  const buttonStyles =
    "space-mono bold bg-[var(--lightblue)] text-white pl-[18px] pr-[14px] py-3 rounded-[10px] cursor-pointer hover:bg-[var(--lightblue-hover)] transition-all";
  const buttonStylesLarger = "md:text-base md:pt-[12.5px] md:pb-[13.5] md:px-6";
  const errorMsg =
    "absolute text-[var(--red)] space-mono bold -bottom-10 lg:bottom-auto lg:right-[140px]";

  return (
    <div className={`${searchContainer} ${searchContainerLarger}`}>
      <img src={SearchIcon} alt="Search icon" className={searchIconStyles} />
      <input
        placeholder="Search GitHub username…"
        className={`${inputStyles} ${inputStylesLarger}`}
        onChange={(e) => setSearch(e.target.value)}
        value={search}
      />
      <button
        className={`${buttonStyles} ${buttonStylesLarger}`}
        onClick={() => onSearch(search)}
      >
        Search
      </button>
      {error !== "" && <p className={errorMsg}>{error}</p>}
    </div>
  );
};

export default UserSearch;
