import { useFeedbackItemsContext } from "../../lib/hooks";
import HashTagItem from "./HashTagItem";

export default function HashtagList() {
  const { companyList, handleSelectCompany } = useFeedbackItemsContext();
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
