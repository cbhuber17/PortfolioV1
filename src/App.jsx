import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Addendum from "./pages/Addendum";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Homepage />} />
        <Route path="addendum" element={<Addendum />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
