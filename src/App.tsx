import { Navigate, Route, Routes } from "react-router-dom";
import { AppLayout } from "./components/Layout/AppLayout";
import { CompatibilityPage } from "./pages/CompatibilityPage";
import { DiagnosisQuestionsPage } from "./pages/DiagnosisQuestionsPage";
import { DiagnosisStartPage } from "./pages/DiagnosisStartPage";
import { HomePage } from "./pages/HomePage";
import { ResultPage } from "./pages/ResultPage";
import { TypesPage } from "./pages/TypesPage";

export default function App() {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/compatibility" element={<CompatibilityPage />} />
        <Route path="/diagnosis" element={<DiagnosisStartPage />} />
        <Route path="/diagnosis/questions" element={<DiagnosisQuestionsPage />} />
        <Route path="/types" element={<TypesPage />} />
        <Route path="/result" element={<ResultPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
}
