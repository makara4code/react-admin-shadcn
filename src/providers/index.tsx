import { ErrorBoundary, FallbackProps } from "react-error-boundary";

import { BASE_PATH } from "@/constants";
import { Button } from "@/components/ui/button";
import RouterProvider from "./route-provider";
import { Suspense } from "react";
import ThemeProvider from "./theme-provider";
import { createBrowserHistory } from "history";
import { useRouter } from "@/hooks/routes";

const ErrorFallback = ({ error }: FallbackProps) => {
  const router = useRouter();
  return (
    <div
      className="flex flex-col items-center justify-center w-screen h-screen text-red-500"
      role="alert">
      <h2 className="text-2xl font-semibold">
        Ooops, something went wrong :( )
      </h2>
      <pre className="text-2xl font-bold">{error.message}</pre>
      <pre>{error.stack}</pre>
      <Button className="mt-4" onClick={() => router.back()}>
        Go back
      </Button>
    </div>
  );
};

export default function AppProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const history = createBrowserHistory();

  return (
    <Suspense>
      <RouterProvider basename={BASE_PATH} history={history}>
        <ErrorBoundary FallbackComponent={ErrorFallback}>
          <ThemeProvider>{children}</ThemeProvider>
        </ErrorBoundary>
      </RouterProvider>
    </Suspense>
  );
}
