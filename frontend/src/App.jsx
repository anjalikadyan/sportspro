import { useState, useEffect } from 'react';
import LandingPage from './components/LandingPage';
import Register from './components/Auth/Register';
import Login from './components/Auth/Login';
import SuperAdminDashboard from './components/Dashboard/SuperAdminDashboard';
import CoachDashboard from './components/Dashboard/CoachDashboard';
import PlayerDashboard from './components/Dashboard/PlayerDashboard';
import { API_BASE_URL } from './config/api';
import './App.css';
import ErrorBoundary from './components/ErrorBoundary';

function App() {
  const [currentView, setCurrentView] = useState('landing'); // 'landing', 'login', 'register', 'dashboard'
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Check if user is already logged in on app load
  useEffect(() => {
    const restoreSession = async () => {
      const token = sessionStorage.getItem('token');

      if (!token) {
        setLoading(false);
        return;
      }

      try {
        const response = await fetch(`${API_BASE_URL}/api/auth/me`, {
          headers: { Authorization: `Bearer ${token}` },
        });

        if (!response.ok) {
          sessionStorage.removeItem('token');
          sessionStorage.removeItem('user');
          setLoading(false);
          return;
        }

        const data = await response.json();
        const userData = data.data?.user;
        if (userData) {
          const normalized = {
            id: userData.id || userData._id,
            name: userData.name,
            email: userData.email,
            role: userData.role,
            isActive: userData.isActive,
          };
          sessionStorage.setItem('user', JSON.stringify(normalized));
          setUser(normalized);
          setCurrentView('dashboard');
        }
      } catch {
        sessionStorage.removeItem('token');
        sessionStorage.removeItem('user');
      } finally {
        setLoading(false);
      }
    };

    restoreSession();
  }, []);

  const handleLoginSuccess = (userData) => {
    setUser(userData);
    setCurrentView('dashboard');
  };

  const handleRegisterSuccess = (userData) => {
    setUser(userData);
    setCurrentView('dashboard');
  };

  const handleLogout = () => {
    sessionStorage.removeItem('token');
    sessionStorage.removeItem('user');
    setUser(null);
    setCurrentView('login');
  };

  const switchToRegister = () => {
    setCurrentView('register');
  };

  const switchToLogin = () => {
    setCurrentView('login');
  };

  const switchToLanding = () => {
    setCurrentView('landing');
  };

  // Show loading spinner while checking auth status
  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  // Render appropriate view based on current state
  switch (currentView) {
    case 'login':
      return (
        <Login
          onSuccess={handleLoginSuccess}
          onSwitchToRegister={switchToRegister}
          onBackToLanding={switchToLanding}
        />
      );
    
    case 'register':
      return (
        <Register
          onSuccess={handleRegisterSuccess}
          onSwitchToLogin={switchToLogin}
          onBackToLanding={switchToLanding}
        />
      );
    
    case 'dashboard':
      if (user?.role === 'super_admin') {
        return (
          <SuperAdminDashboard
            user={user}
            onLogout={handleLogout}
          />
        );
      } else if (user?.role === 'coach') {
        return (
          <CoachDashboard
            user={user}
            onLogout={handleLogout}
          />
        );
      } else if (user?.role === 'player') {
        return (
          <PlayerDashboard
            user={user}
            onLogout={handleLogout}
          />
        );
      }
      return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center">
          <p>Unknown user role</p>
        </div>
      );
    
    case 'landing':
    default:
      return (
        <LandingPage
          onSwitchToLogin={switchToLogin}
          onSwitchToRegister={switchToRegister}
        />
      );
  }
}

function AppWithErrorBoundary() {
  return <ErrorBoundary><App /></ErrorBoundary>;
}

export default AppWithErrorBoundary;
