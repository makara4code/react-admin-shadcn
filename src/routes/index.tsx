import { Navigate, Outlet, useRoutes } from "react-router-dom";

import DashboardLayout from "@/components/layout/DashboardLayout";
import DashboardPage from "@/pages/dashboard";
import NotFound from "@/components/shared/NotFound";
import { Suspense } from "react";
import UserPage from "@/pages/users";

export default function AppRouter() {
  const privateRoutes = [
    {
      path: "/",
      element: (
        <DashboardLayout>
          <Suspense>
            <Outlet />
          </Suspense>
        </DashboardLayout>
      ),
      children: [
        {
          element: <DashboardPage />,
          index: true,
        },
        {
          path: "users",
          element: <UserPage />,
        },
      ],
    },
  ];

  const publicRoutes = [
    {
      path: "/404",
      element: <NotFound />,
    },
    {
      path: "*",
      element: <Navigate to="/404" replace />,
    },
  ];

  return useRoutes([...publicRoutes, ...privateRoutes]);
}
