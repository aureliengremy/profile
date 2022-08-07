import { Route, Routes } from 'react-router-dom';
import Top from "./components/Top/Top";
import OldVersion from './components/old/OldVersion';
import Middle from "./components/Middle/Middle";
import Bottom from './components/Bottom/Bottom';

const App = () =>  {
  const handleScroll = event => {
    console.log('scrollTopAPP: ', event.currentTarget.scrollTop);
    console.log('offsetHeightAPP: ', event.currentTarget.offsetHeight);
  };
  return (
    <Routes>
      <Route index path="/profile" element={
        <div onScroll={handleScroll} className="container">
          <div className="row screen-row">
            <Top/>
          </div>
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
