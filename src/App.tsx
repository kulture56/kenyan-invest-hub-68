import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/contexts/ThemeContext";
import Index from "./pages/Index";
import ProfilePage from "./pages/ProfilePage";
import SettingsPage from "./pages/SettingsPage";
import HelpPage from "./pages/HelpPage";
import MessagesPage from "./pages/MessagesPage";
import NotificationsPage from "./pages/NotificationsPage";
import BookmarksPage from "./pages/BookmarksPage";
import LoginPage from "./pages/LoginPage";
import NotFound from "./pages/NotFound";
import LearningHubPage from "./pages/LearningHubPage";
import ReportPage from "./pages/ReportPage";
import JobsHubPage from "./pages/JobsHubPage";
import ProtectedRoute from "@/components/auth/ProtectedRoute";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider>
      <TooltipProvider>
        <BrowserRouter>
          <Routes>
            {/* Public Route */}
            <Route path="/login" element={<LoginPage />} />

            {/* Protected Routes */}
            <Route
              path="/"
              element={
                <ProtectedRoute>
                  <Index />
                </ProtectedRoute>
              }
            />
            <Route
              path="/profile"
              element={
                <ProtectedRoute>
                  <ProfilePage />
                </ProtectedRoute>
              }
            />
            <Route
              path="/settings"
              element={
                <ProtectedRoute>
                  <SettingsPage />
                </ProtectedRoute>
              }
            />
            <Route
              path="/help"
              element={
                <ProtectedRoute>
                  <HelpPage />
                </ProtectedRoute>
              }
            />
            <Route
              path="/messages"
              element={
                <ProtectedRoute>
                  <MessagesPage />
                </ProtectedRoute>
              }
            />
            <Route
              path="/notifications"
              element={
                <ProtectedRoute>
                  <NotificationsPage />
                </ProtectedRoute>
              }
            />
            <Route
              path="/bookmarks"
              element={
                <ProtectedRoute>
                  <BookmarksPage />
                </ProtectedRoute>
              }
            />
            <Route
              path="/learn"
              element={
                <ProtectedRoute>
                  <LearningHubPage />
                </ProtectedRoute>
              }
            />
            <Route
              path="/learning-hub"
              element={
                <ProtectedRoute>
                  <LearningHubPage />
                </ProtectedRoute>
              }
            />
            <Route
              path="/glossary"
              element={
                <ProtectedRoute>
                  <LearningHubPage initialTab="glossary" />
                </ProtectedRoute>
              }
            />
            <Route
              path="/streaks"
              element={
                <ProtectedRoute>
                  <LearningHubPage initialTab="streaks" />
                </ProtectedRoute>
              }
            />
            <Route
              path="/jobs"
              element={
                <ProtectedRoute>
                  <JobsHubPage />
                </ProtectedRoute>
              }
            />
            <Route
              path="/career-hub"
              element={
                <ProtectedRoute>
                  <JobsHubPage />
                </ProtectedRoute>
              }
            />
            <Route
              path="/report/:postId"
              element={
                <ProtectedRoute>
                  <ReportPage />
                </ProtectedRoute>
              }
            />
            {/* 404 is public */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
        <Toaster />
        <Sonner />
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
