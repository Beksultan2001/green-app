import { useEffect } from "react";
import { BrowserRouter, Routes, Route} from 'react-router-dom';

// components
import DashboardLayout from "./layout/DashboardLayout";
import Transfer from "./pages/Transfer";
import CreateOffer from "./pages/CreateOffer";
import TakeOffer from "./pages/TakeOffer";
import { useDispatch } from "react-redux";
import { fetchTokens } from "./redux/slices/tokenSlice";

const App = () => {
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(fetchTokens());
  }, [dispatch]);


  return (
    <BrowserRouter>
      <DashboardLayout>
          <Routes>
            <Route path="/" element={<Transfer />}  />
            <Route path="/createoffer" element={<CreateOffer />} />
            <Route path="/takeoffer" element={<TakeOffer />} />
          </Routes>
      </DashboardLayout>
      </BrowserRouter>
  );
};

export default App;
