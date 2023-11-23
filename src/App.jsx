import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Addendum from "./pages/Addendum";
import PageNotFound from "./pages/PageNotFound";
import { ScrollTopWrapper } from "./hoc";

const App = () => {
  return (
    <BrowserRouter>
      <ScrollTopWrapper>
        <Routes>
          <Route index element={<Homepage />} />
          <Route path="addendum" element={<Addendum />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </ScrollTopWrapper>
    </BrowserRouter>
  );
};

export default App;
