import { useEffect, useState } from "react";
import FeedbackItem from "./FeedbackItem";
import Spinner from "./Spinner";
import Error from "./Error";

// const exampleFeedbackItems = [
//   {
//     upvoteCount: 593,
//     badgeLetter: "B",
//     companyName: "Nike",
//     text: "test test test",
//     daysAgo: 10,
//   },
//   {
//     upvoteCount: 666,
//     badgeLetter: "S",
//     companyName: "Starbucks",
//     text: "Coffee Coffee",
//     daysAgo: 3,
//   },
//   {
//     upvoteCount: 777,
//     badgeLetter: "Q",
//     companyName: "Quiznos",
//     text: "MeatMeat",
//     daysAgo: 7,
//   },
// ];

export default function FeedbackList() {
  const [feedbackItems, setFeedbackItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    setIsLoading(true);

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

  return (
    <ol className="feedback-list">
      {isLoading && <Spinner />}
      {error && <Error error={error} />}
      {feedbackItems.map((feedbackItem) => (
        <FeedbackItem key={feedbackItem.id} feedbackItem={feedbackItem} />
      ))}
    </ol>
  );
}
