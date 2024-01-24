import { useFeedbackItemsStore } from "../../stores/feedbackItemsStore";
import HashTagItem from "./HashTagItem";

export default function HashtagList() {
  // const { companyList, handleSelectCompany } = useFeedbackItemsContext();
  const companyList = useFeedbackItemsStore((state) => state.getCompanyList());
  const selectCompany = useFeedbackItemsStore((state) => state.selectCompany);
  return (
    <ul className="hashtags">
      {companyList.map((company: string) => (
        <HashTagItem
          key={company}
          onSelectCompany={selectCompany}
          company={company}
        />
      ))}
    </ul>
  );
}
