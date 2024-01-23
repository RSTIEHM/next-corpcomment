import { TriangleUpIcon } from "@radix-ui/react-icons";
import { TFeedbackItem } from "../../lib/types";

// TYPE PROPS =========================================
type FeedbackItemProps = { feedbackItem: TFeedbackItem };

function FeedbackItem({ feedbackItem }: FeedbackItemProps) {
  return (
    <li className="feedback">
      <button>
        <TriangleUpIcon />
        <span>{feedbackItem.upvoteCount}</span>
      </button>
      <div>
        <p>{feedbackItem.badgeLetter}</p>
      </div>
      <div>
        <p>{feedbackItem.company}</p>
        <p>{feedbackItem.text}</p>
      </div>
      <p>
        {feedbackItem.daysAgo === 0 ? "NEW" : `${feedbackItem.daysAgo}d ago`}
      </p>
    </li>
  );
}

export default FeedbackItem;