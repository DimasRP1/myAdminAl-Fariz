import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import UserTable from './pages/UserTable';
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/user-table" element={<UserTable/>} />
        <Route path="/edit-profile" element={<HomePage/>} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/" element={<HomePage />} />
        {/* Tambahkan rute lain sesuai kebutuhan */}
      </Routes>
    </Router>
  );
}

export default App;
