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
        <div onScroll={handleScroll} className="bg-gray-50 text-gray-900">
          <div className="lg:flex lg:h-screen">
            <Top/>
          </div>
          <div className="lg:flex bg-gray-100">
            <Middle/>
          </div>
          <div className="lg:flex lg:h-screen">
            <Bottom/>
          </div>
        </div>
      }/>
      <Route path="/old_version" element={ <OldVersion/>}/>
  </Routes>

);
}

export default App;
