import HeaderComponent from "./components/Header/Header";
import SearchContainer from "./components/SearchContainer/SearchContainer";
import PackOpenerContainer from "./components/PackOpenerContainer/PackOpenerContainer";
import { Link, Navigate, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import NotFoundPage from "./pages/NotFoundPage";
import ResultsPage from "./pages/ResultsPage";
import MyDeck from "./pages/MyDeckPage";
import CreateCardPage from "./pages/CreateCardPage";

function App() {
  return (
    <>
      <HeaderComponent />

      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/results" element={<ResultsPage />} />
        <Route path="/mydeck" element={<MyDeck />} />
        <Route path="/createcard" element={<CreateCardPage />} />
        <Route path="*" element={<NotFoundPage />} />

        <SearchContainer />
        <PackOpenerContainer />
      </Routes>
    </>
  );
}

export default App;
