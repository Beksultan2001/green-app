import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route} from 'react-router-dom';

// components
import DashboardLayout from "./layout/DashboardLayout";
import Transfer from "./pages/Transfer";
import CreateOffer from "./pages/CreateOffer";
import TakeOffer from "./pages/TakeOffer";

const App = () => {
  const [showModal, setShowModal] = useState(false);
  const toggleShowModal = () => setShowModal(!showModal);

  // show on mount
  useEffect(() => setShowModal(true), []);

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
