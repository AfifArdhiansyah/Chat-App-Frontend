import {Routes, Route, BrowserRouter} from 'react-router-dom';
import {Login, SignUp, Home, RoomChat, FriendList} from './pages';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/signup" element={<SignUp/>} />
        <Route path="/home" element={<Home/>} />
        <Route path="/chat/:idConv" element={<RoomChat/>} />
        <Route path="/friend-list" element={<FriendList/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
