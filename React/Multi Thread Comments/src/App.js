import "./App.css";
import { Comments } from "./components/comments";
import { data } from "./Data/Data";

function App() {
  return (
    <div className="App">
      <Comments data={data} />
    </div>
  );
}

export default App;
