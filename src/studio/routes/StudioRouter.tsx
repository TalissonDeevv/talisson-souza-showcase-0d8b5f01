import { Navigate, Route, Routes } from "react-router-dom";
import type { ReactNode } from "react";
import { StudioShell } from "../layouts/StudioShell";
import { StudioMockProvider } from "../mock/store";
import {
  StudioAnalyticsPage,
  StudioArticleEditorPage,
  StudioArticlesPage,
  StudioCommentsPage,
  StudioDashboardPage,
  StudioFallbackPage,
  StudioLoginPage,
  StudioMediaPage,
  StudioNewsletterPage,
  StudioSeoPage,
  StudioSettingsPage,
  StudioUsersPage,
} from "../pages/frontend/StudioFrontendPages";

function StudioRoutedShell({ children }: { children: ReactNode }) {
  return <StudioShell>{children}</StudioShell>;
}

export function StudioRouter() {
  return (
    <StudioMockProvider>
      <Routes>
        <Route path="login" element={<StudioLoginPage />} />
        <Route index element={<StudioRoutedShell><StudioDashboardPage /></StudioRoutedShell>} />
        <Route path="articles" element={<StudioRoutedShell><StudioArticlesPage /></StudioRoutedShell>} />
        <Route path="articles/editor" element={<StudioRoutedShell><StudioArticleEditorPage /></StudioRoutedShell>} />
        <Route path="media" element={<StudioRoutedShell><StudioMediaPage /></StudioRoutedShell>} />
        <Route path="seo" element={<StudioRoutedShell><StudioSeoPage /></StudioRoutedShell>} />
        <Route path="newsletter" element={<StudioRoutedShell><StudioNewsletterPage /></StudioRoutedShell>} />
        <Route path="comments" element={<StudioRoutedShell><StudioCommentsPage /></StudioRoutedShell>} />
        <Route path="discord" element={<StudioRoutedShell><StudioCommentsPage /></StudioRoutedShell>} />
        <Route path="analytics" element={<StudioRoutedShell><StudioAnalyticsPage /></StudioRoutedShell>} />
        <Route path="users" element={<StudioRoutedShell><StudioUsersPage /></StudioRoutedShell>} />
        <Route path="settings" element={<StudioRoutedShell><StudioSettingsPage /></StudioRoutedShell>} />
        <Route path="dashboard" element={<Navigate to="/studio" replace />} />
        <Route path="*" element={<StudioRoutedShell><StudioFallbackPage /></StudioRoutedShell>} />
      </Routes>
    </StudioMockProvider>
  );
}
