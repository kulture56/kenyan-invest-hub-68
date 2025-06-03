
// This file will be updated to remove the old logout function since we'll implement it directly in components
export const clearAuthData = () => {
  // Clear any stored auth data
  localStorage.removeItem('auth');
  sessionStorage.removeItem('auth');
  localStorage.removeItem('openai_api_key');
};
