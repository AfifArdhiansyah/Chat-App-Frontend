import {Routes, Route, BrowserRouter} from 'react-router-dom';
import {Login, SignUp, Home, RoomChat} from './pages';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/signup" element={<SignUp/>} />
        <Route path="/home" element={<Home/>} />
        <Route path="/chat" element={<RoomChat/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
