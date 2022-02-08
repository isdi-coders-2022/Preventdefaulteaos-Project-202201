import HeaderComponent from "./components/Header/Header";

import { Navigate, Route, Routes } from "react-router-dom";
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
      </Routes>
    </>
  );
}

export default App;
