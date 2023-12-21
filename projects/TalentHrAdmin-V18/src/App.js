import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Dashboard from "./Components/Dashboard/Dashboard";
import ScrollToTop from "./Components/ScrollToTop";
import Login from "./Components/Login/Login";
import LogOut from "./Components/Login/LogOut";
import People from "./Components/People/People";
import RecruiterMaster from "./Components/RecruiterMaster/RecruiterMaster";
import JdMaster from "./Components/JdMaster/JdMaster";
import Filter from './Components/Filter/Filter'
import UserIdChang from "./Components/UserIdChang/UserIdChang";
import UserDashboard from "./Components/UserDashboard/UserDashboard";
import LandingPage from "./Components/LandingPage/LandingPage";
import ClientAgreement from "./Components/ClientAgreement/ClientAgreement";
import Client from "./Components/Client/Client";
import Freelance from "./Components/Freelance/Freelence";
import FilterReport from "./Components/Report/FilterReport";
import Report from "./Components/Report/Report";
import CreateEmail from "./Components/CreateEmail/CreateEmail";
import Invoicing from "./Components/Invoicing/Invoicing";
import ListOfCandi from "./Components/ListOfCandi/ListOfCandi";
import FilterOfCandi from "./Components/ListOfCandi/FilterOfCandi";
import FilterJdMaster from "./Components/JdMaster/FilterJdMaster";
import EditJd from "./Components/JdMaster/EditJd";
import EditUser from "./Components/UserIdChang/EditUser";

import EditInvoice from "./Components/Invoicing/EditInvoice";
import ViewInvoice from "./Components/Invoicing/ViewInvoice";
import EditClientmaster from "./Components/Client/EditClientmaster";
import TemplateList from "./Components/JdMaster/TemplateList";
import EditTemplate from "./Components/JdMaster/EditTemplate";

function App() {

  return (
    <>
      <BrowserRouter>
      <ScrollToTop />
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/Dashbaord" element={<Dashboard />} />
      <Route path="/logout" element={<LogOut />} />
      <Route path="/People" element={<People />} />
      <Route path="/RecruiterMaster" element={<RecruiterMaster/>} />
      <Route path="/JdMaster" element={<JdMaster/>}/>
      <Route path="/Filter" element={<Filter/>}/>
      <Route path="/useridlevl" element={<UserIdChang/>}/>
      <Route path="/userdashboard" element={<UserDashboard/>}/>
      <Route path="/landing-page" element={<LandingPage/>}/>
      <Route path="/client-agreement" element={<ClientAgreement/>}/>
      <Route path="/client-master" element={<Client/>}/>
      <Route path="/freelance" element={<Freelance/>}/>
      <Route path="/report-filter" element={<FilterReport/>}/>
      <Route path="/report" element={<Report/>}/>
      <Route path="/create-email" element={<CreateEmail/>}/>
      <Route path="/invoicing" element={<Invoicing/>}/>
      <Route path="/list-of-candidate" element={<ListOfCandi/>}/>
      <Route path="/filter-of-candidate" element={<FilterOfCandi/>}/>
      <Route path="/filter-jd-master" element={<FilterJdMaster/>}/>
      <Route path="/edit-jd-master" element={<EditJd/>}/>
      <Route path="/edit-user-id-level" element={<EditUser/>}/>
      <Route path="/invoice-edit" element={<EditInvoice/>}/>
      <Route path="/view-invoice" element={<ViewInvoice/>}/>
      <Route path="/edit-client-master" element={<EditClientmaster/>}/>
      <Route path="/jd-template" element={<TemplateList/>}/>
      <Route path="/edit-template" element={<EditTemplate/>}/>
    </Routes>
  </BrowserRouter>
    </>
  );
};

export default App;