interface UserCardLoaderProps {
  cardContainer: string;
  infoSection: string;
  avatarStyles: string;
  lgArrangement: string;
  dataCard: string;
  socialSection: string;
  socialCol: string;
}

const UserCardLoader = ({
  cardContainer,
  infoSection,
  avatarStyles,
  lgArrangement,
  dataCard,
  socialSection,
  socialCol,
}: UserCardLoaderProps) => {
  return (
    <div className={cardContainer + " animate-pulse"}>
      <div className={infoSection}>
        <div className={avatarStyles + " bg-gray-300"} />
        <div className={lgArrangement + " w-full"}>
          <div className="flex flex-col gap-2 w-full">
            <div className="h-4 w-3/5 bg-gray-300 rounded" />
            <div className="h-3 w-2/5 bg-gray-300 rounded" />
          </div>
          <div className="h-3 w-2/6 bg-gray-300 rounded" />
        </div>
      </div>

      <div className="mt-8 space-y-3">
        <div className="h-3 w-full bg-gray-300 rounded" />
        <div className="h-3 w-11/12 bg-gray-300 rounded" />
        <div className="h-3 w-10/12 bg-gray-300 rounded" />
      </div>

      <div className={dataCard}>
        <div className="flex flex-col gap-2 items-center">
          <div className="h-3 w-12 bg-gray-300 rounded" />
          <div className="h-4 w-10 bg-gray-300 rounded" />
        </div>
        <div className="flex flex-col gap-2 items-center">
          <div className="h-3 w-16 bg-gray-300 rounded" />
          <div className="h-4 w-12 bg-gray-300 rounded" />
        </div>
        <div className="flex flex-col gap-2 items-center">
          <div className="h-3 w-14 bg-gray-300 rounded" />
          <div className="h-4 w-11 bg-gray-300 rounded" />
        </div>
      </div>

      <div className={socialSection}>
        <div className={socialCol}>
          {[...Array(2)].map((key) => (
            <div key={key} className="flex flex-row gap-5">
              <div className="w-5 h-5 bg-gray-300 rounded" />
              <div className="h-4 w-32 bg-gray-300 rounded" />
            </div>
          ))}
        </div>
        <div className={socialCol}>
          {[...Array(2)].map((key) => (
            <div key={key} className="flex flex-row gap-5">
              <div className="w-5 h-5 bg-gray-300 rounded" />
              <div className="h-4 w-28 bg-gray-300 rounded" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UserCardLoader;
