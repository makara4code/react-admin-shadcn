import { ErrorBoundary, FallbackProps } from "react-error-boundary";

import { BrowserRouter } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Suspense } from "react";
import { useRouter } from "@/hooks/routes";
import ThemeProvider from "./theme-provider";

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
  return (
    <Suspense>
      <BrowserRouter>
        <ErrorBoundary FallbackComponent={ErrorFallback}>
          <ThemeProvider>{children}</ThemeProvider>
        </ErrorBoundary>
      </BrowserRouter>
    </Suspense>
  );
}
