
export const handleLogout = () => {
  // Show confirmation dialog
  const confirmed = window.confirm("Are you sure you want to log out?");
  
  if (confirmed) {
    // Clear any stored auth data
    localStorage.removeItem('auth');
    sessionStorage.removeItem('auth');
    localStorage.removeItem('openai_api_key');
    
    // Redirect to login page
    window.location.href = 'https://preview--gelt.lovable.app/login';
  }
};
