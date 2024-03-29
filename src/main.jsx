import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Decode from './views/Decode';
import Home from './views/Home';
import Encode from './views/Encode';
import Landing from './views/Landing';
import { OffsetProvider } from './context/OffsetContext';
import './index.css';

function App() {
  return (
    <OffsetProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/home" element={<Home />} />
          <Route path="/decode" element={<Decode />} />
          <Route path="/encode" element={<Encode />} />
        </Routes>
      </Router>
    </OffsetProvider>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
