import Bottom from "./Components/Bottom/Bottom";
import LeftMain from "./Components/LeftMain/LeftMain";
import RightMain from "./Components/RightMain/RightMain";
import Top from "./Components/Top/Top";

function App() {
  return (
    <div className="container">
      <Top />
      <div className="content">
        <LeftMain />
        <RightMain />
      </div>
      <Bottom/>
    </div>
  );
}

export default App;
