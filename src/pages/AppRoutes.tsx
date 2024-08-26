import { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { lazy } from "react";
import LoadingScreen from "../components/LoadingScreen/LoadingScreen";

const Home = lazy(() => import("./home/index"));
const Projects = lazy(() => import("./projects/index"));
const About = lazy(() => import("./aboutMe/index"));

const AppRoutes = () => {
  return (
    <Router>
      <Suspense fallback={<LoadingScreen />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Suspense>
    </Router>
  );
};

export default AppRoutes;
