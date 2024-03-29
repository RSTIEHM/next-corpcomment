import { useState } from "react";
import { MAX_CHARACTERS } from "../../lib/constants";

type FeedbackFormProps = {
  onAddToList: (text: string) => void;
};
export default function FeedbackForm({ onAddToList }: FeedbackFormProps) {
  const [text, setText] = useState("");
  const [showValidHash, setShowValidHash] = useState(false);
  const [showInvalidHash, setShowInvalidHash] = useState(false);
  const charCount = MAX_CHARACTERS - text.length;

  function handleChange(e: React.ChangeEvent<HTMLTextAreaElement>) {
    const newText = e.target.value;
    if (newText.length > MAX_CHARACTERS) return;
    setText(newText);
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    // BASIC VALIDATION
    if (text.includes("#") && text.length >= 5) {
      setShowValidHash(true);
      setTimeout(() => {
        setShowValidHash(false);
      }, 2000);
    } else {
      setShowInvalidHash(true);
      setTimeout(() => {
        setShowInvalidHash(false);
      }, 2000);
      return;
    }
    onAddToList(text);
    setText("");
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={`form ${showValidHash ? "form--valid" : ""} 
                      ${showInvalidHash ? "form--invalid" : ""} `}
    >
      <textarea
        onChange={handleChange}
        value={text}
        spellCheck={false}
        placeholder=""
        id="feedback-textarea"
      />
      <label htmlFor="feedback-textarea">Enter Feedback Here</label>
      <div>
        <p className="u-italic">{charCount}</p>
        <button type="submit">
          <span>Submit</span>
        </button>
      </div>
    </form>
  );
}
