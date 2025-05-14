
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import TopicPage from "./pages/TopicPage";
import RafikiPage from "./pages/RafikiPage";
import ProfilePage from "./pages/ProfilePage";
import MessagesPage from "./pages/MessagesPage";
import NotFound from "./pages/NotFound";
import RafikiChatWidget from "./components/rafiki/RafikiChatWidget";
import LearningHubPage from "./pages/LearningHubPage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/topics/:topicSlug" element={<TopicPage />} />
          <Route path="/rafiki" element={<RafikiPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/messages" element={<MessagesPage />} />
          <Route path="/learn" element={<LearningHubPage />} />
          <Route path="/learning-hub" element={<LearningHubPage />} />
          <Route path="/glossary" element={<LearningHubPage initialTab="glossary" />} />
          <Route path="/streaks" element={<LearningHubPage initialTab="streaks" />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <RafikiChatWidget />
      </BrowserRouter>
      <Toaster />
      <Sonner />
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
