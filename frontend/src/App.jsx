import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from './components/Navbar';
import AddMedicine from './pages/AddMedicine';
import MedicineList from "./pages/MedicineList";
import Medicine from "./pages/MedicineDetails";
import Participants from "./pages/Participants";
import Transactions from "./pages/Transactions";
import Shipments from "./pages/Shipments";
import BackendStatusModal from './components/BackendStatusModal';
import image from './assets/home.jpg';

function App() {
  return (
    <Router>
      <BackendStatusModal />
      <Navbar />
          <Routes>
            <Route exact path="/add-medicine" element={<AddMedicine />} />
            <Route exact path="/medicines" element={<MedicineList />} />
            <Route exact path="/medicine-details" element={<Medicine />} />
            <Route exact path="/participants" element={<Participants />} />
            <Route exact path="/transactions" element={<Transactions />} />
            <Route exact path="/shipments" element={<Shipments />} />
            <Route exact path="/" element={<Home />} />
          </Routes>
    </Router>
  );
}

export default App;