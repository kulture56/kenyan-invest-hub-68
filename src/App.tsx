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

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider>
      <TooltipProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/" element={<Index />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/settings" element={<SettingsPage />} />
            <Route path="/help" element={<HelpPage />} />
            <Route path="/messages" element={<MessagesPage />} />
            <Route path="/notifications" element={<NotificationsPage />} />
            <Route path="/bookmarks" element={<BookmarksPage />} />
            <Route path="/learn" element={<LearningHubPage />} />
            <Route path="/learning-hub" element={<LearningHubPage />} />
            <Route path="/glossary" element={<LearningHubPage initialTab="glossary" />} />
            <Route path="/streaks" element={<LearningHubPage initialTab="streaks" />} />
            <Route path="/jobs" element={<JobsHubPage />} />
            <Route path="/career-hub" element={<JobsHubPage />} />
            <Route path="/report/:postId" element={<ReportPage />} />
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
