
export const handleLogout = () => {
  // Clear any stored auth data
  localStorage.removeItem('auth');
  sessionStorage.removeItem('auth');
  
  // Redirect to login page
  window.location.href = '/login';
};
