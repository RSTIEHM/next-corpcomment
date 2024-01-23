import HashTagItem from "./HashTagItem";

type HashTagListProps = {
  companyList: string[];
};
export default function HashtagList({ companyList }: HashTagListProps) {
  return (
    <ul className="hashtags">
      {companyList.map((company: string) => (
        <HashTagItem company={company} />
      ))}
    </ul>
  );
}
