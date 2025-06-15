
import React, { useEffect, useState } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";

// The login/signup URL to redirect unauthenticated users
const LOGIN_URL = "https://preview--gelt.lovable.app/login";

/**
 * ProtectedRoute - Wrapper for route protection.
 * Redirects to LOGIN_URL if no user is authenticated.
 */
const ProtectedRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const location = useLocation();
  const [loading, setLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  useEffect(() => {
    // Check for session
    supabase.auth.getSession().then(({ data: { session } }) => {
      setIsAuthenticated(!!session?.user);
      setLoading(false);
    });
    // Listen for future auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setIsAuthenticated(!!session?.user);
      setLoading(false);
    });
    return () => {
      subscription.unsubscribe();
    };
  }, [location.pathname]);

  if (loading) {
    return <div className="w-screen h-screen flex items-center justify-center">Loading...</div>;
  }

  if (!isAuthenticated) {
    // Use direct window.location.href to redirect so even API requests included cookies
    window.location.href = LOGIN_URL;
    return null;
    // Alternatively, use this for client-side apps only:
    // return <Navigate to={LOGIN_URL} replace />;
  }

  return <>{children}</>;
};

export default ProtectedRoute;
