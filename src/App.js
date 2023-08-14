import "./App.css";
import D6 from "./components/D6/D6";
import D20 from "./components/D20";

export default function App() {
  return (
    <div className="main">
      <h1 className="title">DICEY</h1>
      <D6 />
      <D20 />
    </div>
  );
}
