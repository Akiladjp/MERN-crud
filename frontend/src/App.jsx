import "./App.css";
import { AddNew } from "./components/AddNew";
import User from "./components/user";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <div className="">
        <Routes>
          <Route path='/' element={<User />} />
          <Route path='/addnew' element={<AddNew/>} />
        </Routes>
      </div>
    </>
  );
}

export default App;
