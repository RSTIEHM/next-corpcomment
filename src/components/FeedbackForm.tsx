import { useState } from "react";
import { MAX_CHARACTERS } from "../lib/constants";

export default function FeedbackForm() {
  const [text, setText] = useState("");
  const charCount = MAX_CHARACTERS - text.length;

  function handleChange(e: React.ChangeEvent<HTMLTextAreaElement>) {
    const newText = e.target.value;
    if (newText.length > MAX_CHARACTERS) return;
    setText(newText);
  }

  return (
    <form className="form">
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
        <button>
          <span>Submit</span>
        </button>
      </div>
    </form>
  );
}
