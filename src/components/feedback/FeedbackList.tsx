import FeedbackItem from "./FeedbackItem";
import Spinner from "../Spinner";
import ErrorMessage from "../ErrorMessage";
import { useFeedbackItemsContext } from "../../lib/hooks";

export default function FeedbackList() {
  const { isLoading, error, filteredFeedBackItems } = useFeedbackItemsContext();

  return (
    <ol className="feedback-list">
      {isLoading && <Spinner />}
      {error && <ErrorMessage error={error} />}
      {filteredFeedBackItems.map((feedbackItem) => (
        <FeedbackItem key={feedbackItem.id} feedbackItem={feedbackItem} />
      ))}
    </ol>
  );
}
