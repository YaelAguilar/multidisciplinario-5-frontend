import { BrowserRouter, Routes, Route } from "react-router-dom";
import HelloWorldPage from "./pages/helloworldpage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HelloWorldPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;