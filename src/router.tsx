import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    lazy: async () => ({
      Component: (await import("@/App")).default,
    }),
  },
  {
    path: "/fincloud",
    lazy: async () => ({
      Component: (await import("@/pages/Fincloud")).default,
    }),
  },
]);

export default router;
