import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Pricing from "./pages/Pricing";
// import Navbar from "./components/navbar/Navbar";
import "./App.css";
import Bulksms from "./pages/Bulksms";
import Bulkemail from "./pages/Bulkemail";
import Digitalmarketing from "./pages/Digitalmarketing";
import Socialmedia from "./pages/Socialmedia";
import Software from "./pages/Software";
import Website from "./pages/Website";
import Whatsapp from "./pages/Whatsapp";
import Voicesms from "./pages/Voicesms";
import Login from "./pages/Login";
import Index from "./pages/Index";
import Privacy from "./pages/Privacy";
import Account from "./pages/Account";
import Terms from "./pages/Terms";


function App() {
  return (
    <>
    
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/bulksms" element={<Bulksms />} />
        <Route path="/bulkemail" element={<Bulkemail />} />
        <Route path="/socialmedia" element={<Socialmedia />} />
        <Route path="/website" element={<Website />} />
        <Route path="/whatsapp" element={<Whatsapp />} />
        <Route path="/voicesms" element={<Voicesms />} />
        <Route path="/software" element={<Software />} />
        <Route path="/login" element={<Login />} />
        <Route path="/account" element={<Account />} />
        <Route path="/digitalmarketing" element={<Digitalmarketing />} />
        <Route path="/Index" element={<Index />} />
        <Route path="/Privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />

      </Routes>
    </>
  );
}

export default App;
