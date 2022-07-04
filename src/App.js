import Left from "./components/left/Left";
import Right from "./components/right/Right";

function App() {
  return (
    <div className="container-fluid">
      <div className="row screen-row">
        <Left/>
        <Right/>
      </div>
    </div>
);
}

export default App;
