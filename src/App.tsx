import { Routes, Route, BrowserRouter } from "react-router-dom";
import { lazy, Suspense, useEffect } from "react";
import MessagesAndNewsletters from "./Components/MessageAndNews/MessagesAndNewsletters";
import LoadingScreen from "./Components/LoadingScreen";
// import MedicalCoding from "./Components/Courses";
import PrivacyPolicy from "./Components/PrivacyPolicy";
import ClinimodeCareerPage from "./Components/Career/ClinimodeCareerPage";
import MedicalCoding from "./Components/Courses/MedicalCoding/MedicalCoding";
import Courses from "./Components/Courses/CourseNew/Courses";
import JobApplicationForm from "./Components/JobForm/JobApplication";
import CandidateTable from "./Components/JobForm/CandidateTable";
// import NotFoundNew from "./Components/NotFoundPAge/NotFoundNew";

// import CertificationsComponent from "./Components/Profiles/";



const Home = lazy(() => import("./Components/Home/Home"));
const Service = lazy(() => import("./Components/Service/Service"));
const Navbar = lazy(() => import("./Components/Navbar"));
const Footer = lazy(() => import("./Components/Footer"));
const Contact = lazy(() => import("./Components/Contact Us/Contact"));
const About = lazy(() => import("./Components/About/About"));
const NotFound = lazy(() => import("./Components/NotFoundPAge/NotFound"));

function App() {

  
  useEffect(() => {
      window.scrollTo(0, 0); // Scroll to the top when page loads
    }, []);
  return (
    <BrowserRouter>
      <Suspense fallback={<LoadingScreen/>}>
        <Routes>
          {/* Routes with Navbar and Footer */}
          <Route
            path="/"
            element={
              <>
                <Navbar />
                <Home />
                <Footer />
              </>
            }
          />
          <Route
            path="/about"
            element={
              <>
                <Navbar />
                <About />
                <Footer />
              </>
            }
          />
           
          <Route
            path="/contact"
            element={
              <>
                <Navbar />
                <Contact />
                <Footer />
              </>
            }
          />
           <Route
            path="/job"
            element={
              <>
                
                <JobApplicationForm />
              </>
            }
          />
           <Route
            path="/can"
            element={
              <>
                
                <CandidateTable />
              </>
            }
          />
          <Route
            path="/clinicaldatamanagement"
            element={
              <>
                <Navbar />
                <Courses/>
                <Footer />
              </>
            }
          /><Route
          path="/medicalcoding"
          element={
            <>
              <Navbar />
              <MedicalCoding />
              <Footer />
            </>
          }
        />
  
          <Route
            path="/messages"
            element={
              <>
                <Navbar />
                <MessagesAndNewsletters />
                <Footer />
              </>
            }
          />
          <Route
            path="/privacypolicy"
            element={
              <>
                <Navbar />
                <PrivacyPolicy />
                <Footer />
              </>
            }
          />
           <Route
      path="/career"
      element={
        <>
          <Navbar />
          <ClinimodeCareerPage />
          <Footer />
        </>
      }
    />
          
          {/* 404 Page WITHOUT Navbar and Footer */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
