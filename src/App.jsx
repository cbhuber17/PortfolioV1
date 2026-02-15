import { HashRouter, Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Addendum from "./pages/Addendum";
import PageNotFound from "./pages/PageNotFound";
import { ScrollTopWrapper } from "./hoc";

const App = () => {
  return (
    <HashRouter>
      <ScrollTopWrapper>
        <Routes>
          <Route index element={<Homepage />} />
          <Route path="addendum" element={<Addendum />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </ScrollTopWrapper>
    </HashRouter>
  );
};

export default App;
