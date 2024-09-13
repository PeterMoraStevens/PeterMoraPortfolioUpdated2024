import Landing from "./routes/landing";
import About from "./routes/about";
import Error from "./routes/error";
import Footer from "./components/ui/footer";
import Blog from "./routes/Blog";
import { Route, Routes, useLocation, BrowserRouter } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import "./index.css";
import Navbar from "./components/navbar";
import Work from "./routes/Work";
import BlogPost from "./routes/BlogPost";

const ProfileRouter = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" index element={<Landing />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Work />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:postUrl" element={<BlogPost />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </AnimatePresence>
  );
};

const app = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <ProfileRouter />
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default app;
