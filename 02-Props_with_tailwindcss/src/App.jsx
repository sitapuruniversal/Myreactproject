import "./App.css";
import AdvancedCard from "./component/AdvancedCard";
import Card from "./component/Card";

function App() {
  return (
    <>
      <h1 className="bg-purple-500 p-4 rounded-md mb-5 ">Welcome to React</h1>
      <Card />
      <AdvancedCard />
    </>
  );
}

export default App;
