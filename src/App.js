import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import GlobalStyle from "./assets/styles/GlobalStyle";
import { useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL } from "./constants/urls";
import UserContext from "./components/Context/context";
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import CreateUserPage from "./pages/CreateUserPage/CreateUserPage";
import TransactionsPage from "./pages/TransactionsPage/TransactionsPage";
import AddTransactionPage from "./pages/AddTransactionPage/AddTransactionPage";

function App() {
  const [user, setUser] = useState([]);
  const [error, setError] = useState(null);
  const [change, setChange] = useState(false);

  const localUserSerializado = localStorage.getItem("localUser");
  const localUser = JSON.parse(localUserSerializado);

  if (localUser && user.length === 0) {
    setUser(localUser);
  }

  return (
    <UserContext.Provider value={{ user, setUser, change, setChange }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage/>} />
          <Route path="/cadastro" element={<CreateUserPage />} />
          <Route path="/transacoes" element={<TransactionsPage />} />
          <Route path="/adiciona-transacao/:type" element={<AddTransactionPage />} />
        </Routes>

        <GlobalStyle />
      </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;
