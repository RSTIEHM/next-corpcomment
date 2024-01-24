import { useContext, useEffect, useState } from "react";
import { FeedbackItemsContext } from "../contexts/FeedbackItemsContextProvider";
import { TFeedbackItem } from "./types";

export function useFeedbackItemsContext() {
  const context = useContext(FeedbackItemsContext);
  if (!context) {
    throw new Error(
      "FeedBackItemsContext is not defined in Feedbacklist component"
    );
  }
  return context;
}

export function useFeedBackItems() {
  const [feedbackItems, setFeedbackItems] = useState<TFeedbackItem[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(
          "https://bytegrad.com/course-assets/projects/corpcomment/api/feedbacks"
        );

        if (!response.ok) {
          throw new Error("");
        }
        const data = await response.json();
        setFeedbackItems(data.feedbacks);
      } catch (error) {
        setError("Something Went Wrong");
      }
      setIsLoading(false);
    };
    fetchData();
  }, []);
  return {
    feedbackItems,
    isLoading,
    error,
    setFeedbackItems,
    setIsLoading,
    setError,
  };
}
