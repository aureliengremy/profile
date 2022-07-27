import { Route, Routes } from 'react-router-dom';
import Top from "./components/Top/Top";
import OldVersion from './components/old/OldVersion';
import Middle from "./components/Middle/Middle";
import Bottom from './components/Bottom/Bottom';

const App = () =>  {

  return (
    <Routes>
      <Route index path="/profile" element={
        <div className="container-fluid">
          <Top/>
          <div className="row screen-row">
            <Middle/>
          </div>
          <div className="row screen-row">
            <Bottom/>
          </div>
        </div>
      }/>
      <Route path="/old_version" element={ <OldVersion/>}/>
  </Routes>

);
}

export default App;
