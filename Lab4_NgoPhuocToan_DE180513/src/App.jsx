import { QuizProvider } from "./context/QuizContext";
import Quiz from "./components/Quiz";

function App() {
  return (
    <QuizProvider>
      <Quiz />
    </QuizProvider>
  );
}

export default App;
