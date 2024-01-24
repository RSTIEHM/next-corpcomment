import { createContext, useMemo, useState, useEffect } from "react";
import { TFeedbackItem } from "../lib/types";
import { useFeedBackItems } from "../lib/hooks";

type FeedbackItemsContextProviderProps = {
  children: React.ReactNode;
};

type TFeedbackItemsContext = {
  filteredFeedBackItems: TFeedbackItem[];
  isLoading: boolean;
  error: string;
  companyList: string[];
  handleAddToList: (text: string) => void;
  handleSelectCompany: (company: string) => void;
};

export const FeedbackItemsContext = createContext<TFeedbackItemsContext | null>(
  null
);

export default function FeedbackItemsContextProvider({
  children,
}: FeedbackItemsContextProviderProps) {
  const { feedbackItems, isLoading, error, setFeedbackItems, setIsLoading } =
    useFeedBackItems();

  const [selectedCompany, setSelectedCompany] = useState("");

  const companyList = useMemo(
    () =>
      feedbackItems
        .map((item) => item.company)
        .filter((company, index, array) => {
          return array.indexOf(company) === index;
        }),
    [feedbackItems]
  );

  const handleAddToList = async (text: string) => {
    const companyName = text
      .split(" ")
      .find((word) => word.includes("#"))!
      .substring(1);

    const newItem: TFeedbackItem = {
      id: new Date().getTime(),
      text: text,
      upvoteCount: 0,
      daysAgo: 0,
      company: companyName,
      badgeLetter: companyName.substring(0, 1).toUpperCase(),
    };
    setFeedbackItems([...feedbackItems, newItem]);
    await fetch(
      "https://bytegrad.com/course-assets/projects/corpcomment/api/feedbacks",
      {
        method: "POST",
        body: JSON.stringify(newItem),
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      }
    );
  };

  const handleSelectCompany = (company: string) => {
    setSelectedCompany(company);
  };

  const filteredFeedBackItems = useMemo(
    () =>
      selectedCompany
        ? feedbackItems.filter((item) => item.company === selectedCompany)
        : feedbackItems,
    [feedbackItems, selectedCompany]
  );

  // useEffect(() => {
  //   const fetchData = async () => {
  //     setIsLoading(true);
  //     try {
  //       const response = await fetch(
  //         "https://bytegrad.com/course-assets/projects/corpcomment/api/feedbacks"
  //       );

  //       if (!response.ok) {
  //         throw new Error("");
  //       }
  //       const data = await response.json();
  //       setFeedbackItems(data.feedbacks);
  //     } catch (error) {
  //       setError("Something Went Wrong");
  //     }
  //     setIsLoading(false);
  //   };
  //   fetchData();
  // }, []);

  useEffect(() => {
    setIsLoading(true);
  }, []);

  return (
    <FeedbackItemsContext.Provider
      value={{
        isLoading,
        error,
        companyList,
        handleAddToList,
        handleSelectCompany,
        filteredFeedBackItems,
      }}
    >
      {children}
    </FeedbackItemsContext.Provider>
  );
}
