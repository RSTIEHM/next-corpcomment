import HashTagItem from "./HashTagItem";

type HashTagListProps = {
  companyList: string[];
  handleSelectCompany: (company: string) => void;
};
export default function HashtagList({
  companyList,
  handleSelectCompany,
}: HashTagListProps) {
  return (
    <ul className="hashtags">
      {companyList.map((company: string) => (
        <HashTagItem
          key={company}
          onSelectCompany={handleSelectCompany}
          company={company}
        />
      ))}
    </ul>
  );
}
