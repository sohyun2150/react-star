import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import MemberList from './pages/members/Members';
import ScoreList from './pages/scores/Scores';
import Component1 from './pages/comp/Component1';
import Component2 from './pages/comp/Component2';
import Component3 from './pages/comp/Component3';
import Component4 from './pages/comp/Component4';
import Component5 from './pages/comp/Component5';
import Component6 from './pages/comp/Component6';
import AxiosEx1 from './pages/axios/Ex1';
import AxiosEx2 from './pages/axios/Ex2';

function App() {
  const appStyle = {
    padding: '30px'
  }

  return (
    <div style={appStyle}>
      <BrowserRouter>
        <Routes>
          <Route path={"/"} element={<Home />}></Route>
          <Route path={"/components/1"} element={<Component1 />}></Route>
          <Route path={"/components/2"} element={<Component2 />}></Route>
          <Route path={"/components/3"} element={<Component3 />}></Route>
          <Route path={"/components/4"} element={<Component4 />}></Route>
          <Route path={"/components/5"} element={<Component5 />}></Route>
          <Route path={"/components/6"} element={<Component6 />}></Route>

          <Route path={"/members"} element={<MemberList />}></Route>
          <Route path={"/scores"} element={<ScoreList />}></Route>

          <Route path={"/axios/1"} element={<AxiosEx1 />}></Route>
          <Route path={"/axios/2"} element={<AxiosEx2 />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
