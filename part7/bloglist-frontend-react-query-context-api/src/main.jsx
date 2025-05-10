import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { NotificationProvider } from "./providers/notification.provider.jsx";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { UserProvider } from "./providers/user.provider.jsx";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <NotificationProvider>
      <QueryClientProvider client={queryClient}>
        <UserProvider>
          <App />
        </UserProvider>
      </QueryClientProvider>
    </NotificationProvider>
  </StrictMode>,
);
