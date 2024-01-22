export default function FeedbackForm() {
  return (
    <form className="form">
      <textarea spellCheck={false} placeholder="vavva" id="feedback-textarea" />
      <label htmlFor="feedback-textarea">Enter Feedback Here</label>
      <div>
        <p className="u-italic">150</p>
        <button>
          <span>Submit</span>
        </button>
      </div>
    </form>
  );
}
