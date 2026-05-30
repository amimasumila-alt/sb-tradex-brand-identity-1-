import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LandingPage } from './components/LandingPage';
import { LoginPage } from './components/LoginPage';
import { Dashboard } from './components/Dashboard';
import { CustomCursor } from './components/Effects';
import { motion, AnimatePresence } from 'framer-motion';

function App() {
  return (
    <Router>
      <CustomCursor />
      <AnimatePresence mode="wait">
        <Routes>
          <Route 
            path="/" 
            element={
              <PageWrapper>
                <LandingPage />
              </PageWrapper>
            } 
          />
          <Route 
            path="/login" 
            element={
              <PageWrapper>
                <LoginPage />
              </PageWrapper>
            } 
          />
          <Route 
            path="/dashboard" 
            element={
              <PageWrapper>
                <Dashboard />
              </PageWrapper>
            } 
          />
          {/* Fallback to landing */}
          <Route path="*" element={<LandingPage />} />
        </Routes>
      </AnimatePresence>
    </Router>
  );
}

const PageWrapper = ({ children }: { children: React.ReactNode }) => (
  <motion.div
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -10 }}
    transition={{ duration: 0.4 }}
  >
    {children}
  </motion.div>
);

export default App;
