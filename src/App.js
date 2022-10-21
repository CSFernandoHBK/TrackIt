import GlobalStyle from "./assets/styles/GlobalStyles";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage/LoginPage";
import HabitsPage from "./pages/HabitsPage/HabitsPage";
import RegistrationPage from "./pages/RegistrationPage/RegistrationPage";
import TodayPage from "./pages/TodayPage/TodayPage";
import HistoryPage from "./pages/HistoryPage/HistoryPage";
import { useState } from "react";

export default function App() {

  const[user, setUser] = useState();

  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage/>}/>
          <Route path="/cadastro" element={<RegistrationPage/>}/>
          <Route path="/habitos" element={<HabitsPage/>}/>
          <Route path="/hoje" element={<TodayPage/>}/>
          <Route path="/historico" element={<HistoryPage/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

