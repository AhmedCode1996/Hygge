import { createRoot } from "react-dom/client";
import { ContextProvider } from "./context.jsx";

import { GlobalStyle } from "./styles/GlobalStyles.js";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home.jsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 0,
    },
  },
});

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
]);

createRoot(document.getElementById("root")).render(
  <QueryClientProvider client={queryClient}>
    <GlobalStyle />
    <ContextProvider>
      <RouterProvider router={router} />
    </ContextProvider>
    <ReactQueryDevtools initialIsOpen={false} />
  </QueryClientProvider>
);
