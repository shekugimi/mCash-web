import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import AdegateOffer from "./components/subcomponents/AdgateOffer"
import AdscendOffer from "./components/subcomponents/AdscendOffer"
import BuzzOffer from "./components/subcomponents/BuzzOffers"
import LimitedOffer from "./components/subcomponents/LimitedOffers"
import TaskOffers from "./components/subcomponents/TaskOffers"
import Error from "./components/subcomponents/Error"
import Redeem from "./components/pages/Redeem";
import Transaction from "./components/pages/Transaction";
import Invite from "./components/pages/Invite";
import Rateus from "./components/pages/Rateus";
import HelpSupport from "./components/pages/HelpSupport";
import PrivacyPolicy from "./components/pages/PrivacyPolicy";


function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/adegate-offer" element={<AdegateOffer />} />
          <Route path="/adscend-offer" element={<AdscendOffer />} />
          <Route path="/buzz-offer" element={<BuzzOffer />} />
          <Route path="/limited-offer" element={<LimitedOffer />} />
          <Route path="/task-offer" element={<TaskOffers />} />
          <Route path="/redeem" element={<Redeem />} />
          <Route path="/transaction" element={<Transaction />} />
          <Route path="/invite" element={<Invite />} />
          <Route path="/rate-us" element={<Rateus />} />
          <Route path="/help-support" element={<HelpSupport />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="*" element={<Error />} /> nnnnnnn
        </Routes>
      </Router>
    </>
  );
}

export default App;
