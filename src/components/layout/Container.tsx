import FeedbackList from "../feedback/FeedbackList";
import Header from "./Header";

export default function Contatiner() {
  return (
    <main className="container">
      <Header />
      <FeedbackList />
    </main>
  );
}
