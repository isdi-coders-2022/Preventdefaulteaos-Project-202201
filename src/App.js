import HeaderComponent from "./components/HeaderComponent/HeaderComponent";

import { Navigate, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import NotFoundPage from "./pages/NotFoundPage";
import ResultsPage from "./pages/ResultsPage";
import MyDeck from "./pages/MyDeck";
import CreateCardPage from "./pages/CreateCardPage";
import MoreInfoPage from "./pages/MoreInfoPage";
import EditCreatedCardPage from "./pages/EditCreatedCardPage";

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
        <Route path="/editcreatedcard/:id" element={<EditCreatedCardPage />} />
        <Route path="*" element={<NotFoundPage />} />
        <Route path="/moreinfo" element={<MoreInfoPage />} />
      </Routes>
    </>
  );
}

export default App;
