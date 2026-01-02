import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home"
import UploadPage from "./pages/UploadPage"
import SignupPage from "./pages/SignupPage"
import SigninPage from "./pages/SigninPage";
import OnboardingPage from "./pages/OnboardingPage";
import Dashboard from "./pages/Dashboard";
import Application from "./pages/Application";
import ApplicationDetails from "./pages/ApplicationDetails";

function App() {
  

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/upload" element={<UploadPage />} />
        <Route path="/sign-up" element={<SignupPage/>} />
        <Route path="/sign-in" element={<SigninPage/>} />
        <Route path="/sign-in" element={<SigninPage/>} />
        <Route path="/onboard" element={<OnboardingPage/>}/>
        <Route path="dashboard" element={<Dashboard/>} />
        <Route path="/application" element={<Application/>} />
        <Route path="/application-detail" element={<ApplicationDetails/>} />
        







      </Routes>
    </BrowserRouter>
  )
}

export default App
