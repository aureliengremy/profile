import Left from "./components/left/Left";
import Right from "./components/right/Right";
import OldVersion from './components/old/OldVersion';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route index path="/profile" element={
        <div className="container-fluid">
          <div className="row screen-row">
            <Left/>
            <Right/>
          </div>
        </div>
      }/>
      <Route path="/old_version" element={ <OldVersion/>}/>
  </Routes>

);
}

export default App;
