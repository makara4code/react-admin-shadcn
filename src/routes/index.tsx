import { Outlet, useRoutes } from "react-router-dom";

import DashboardLayout from "@/components/layout/DashboardLayout";
import DashboardPage from "@/pages/dashboard";
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

  const routes = useRoutes([...privateRoutes]);
  return routes;
}
