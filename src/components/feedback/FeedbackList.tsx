import FeedbackItem from "./FeedbackItem";
import Spinner from "../Spinner";
import ErrorMessage from "../ErrorMessage";
import { useFeedbackItemsStore } from "../../stores/feedbackItemsStore";

export default function FeedbackList() {
  const isLoading = useFeedbackItemsStore((state) => state.isLoading);
  const error = useFeedbackItemsStore((state) => state.error);
  const filteredFeedbackItems = useFeedbackItemsStore((state) =>
    state.getFilteredFeedBackItems()
  );
  return (
    <ol className="feedback-list">
      {isLoading && <Spinner />}
      {error && <ErrorMessage error={error} />}
      {filteredFeedbackItems.map((feedbackItem) => (
        <FeedbackItem key={feedbackItem.id} feedbackItem={feedbackItem} />
      ))}
    </ol>
  );
}
